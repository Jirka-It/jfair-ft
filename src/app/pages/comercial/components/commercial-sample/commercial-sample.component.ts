import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { CommercialSectionService } from '../../services/commercial-section.service';
import { EventService } from '../../services/event.service';
enum STATE {INACTIVE,ACTIVE};
@Component({
  selector: 'app-commercial-sample',
  templateUrl: './commercial-sample.component.html',
  styleUrls: ['./commercial-sample.component.scss']
})
export class CommercialSampleComponent implements OnInit {
  @Input('commercialId') commerical_id:number;
  @Input()     description:string = '';  
  @Output('goBack') back:EventEmitter<any> = new EventEmitter();
  formEdit:FormGroup;

  uploadedFiles:any[] = [];
  eventsData = [];
  filteredEvents:any[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private _eventService:EventService,
    private commercialService:CommercialSectionService
    ) { }

  ngOnInit() {
    this.generateForm();
    if(this.commerical_id){
      this.getFields();
    }
  }
  generateForm(){
    this.formEdit = this.formBuilder.group({
      name:        [null, [Validators.required]],
      sigla:       [null, [Validators.required]],
      summary:     [null, [Validators.required, Validators.maxLength(250)]],
      description: [null, [Validators.required]],
      terms:       ['', []],
      openDate:    [null, [Validators.required]],
      closeDate:   [null, [Validators.required]],
      image:       [null, [Validators.required]],
      plan:        [null, [Validators.required]],
      info:        [null, [Validators.required]],
      color:       [null, [Validators.required]],
      state:       [null, [Validators.required]],
      eventId:     [null, [Validators.required]]
    });
  }
  initFormByObject(data){
    this.formEdit = this.formBuilder.group({
      id: [data.id, [Validators.required]],
      name: [data.name, [Validators.required]],
      sigla: [data.sigla, [Validators.required]],
      summary: [data.summary, [Validators.required]],
      description: [data.description, [Validators.required]],
      terms: [data.terms, []],
      openDate: [new Date(data.openDate + ' '), [Validators.required]],
      closeDate: [new Date(data.closeDate + ' '), [Validators.required]],
      plan: [data.plan, [Validators.required]],
      info: [data.info, [Validators.required]],
      color: [data.color, [Validators.required]],
      state: [data.state, [Validators.required]],
      eventId: [data.event.eventId, [Validators.required]]
    });
  }
  getFields(){
    this.commercialService.find(this.commerical_id).subscribe(
      data => { this.initFormByObject(data);}
    )
  }
  private getEventsAll(state: number)
  {
   
  }
  goBack(){
    this.back.emit();
  }
  saveChanges(){}
  
  filterEvents(event) {
    this.filteredEvents = [{
      name:'hola',
      code:12
    }];
    let params = new HttpParams();
    params = params.append('state', String(STATE.ACTIVE));
    this._eventService.seach(params)
    .subscribe(data => {
      const filter = [];
      const query = event.query;      
      this.eventsData = data.content;
      filter.push(...[this.eventsData.filter( item_event =>{ 
        if( item_event.name
          .toLowerCase()
          .indexOf(query.toLowerCase())){
            return {name:item_event.name,code:item_event.id}
          }else{
            return null;
          }
        })]);             
    });     
  }
  onUpload(event){}

}
