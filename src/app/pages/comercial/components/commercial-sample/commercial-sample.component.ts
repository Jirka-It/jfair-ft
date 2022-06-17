import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { timer } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { environment } from 'src/environments/environment';
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
  @Input()               description:string = '';  
  @Output('goBack')      back:EventEmitter<any> = new EventEmitter();
  
  headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data',
  'Accept': 'application/json',
  Authorization: `Bearer ${this._authService.getToken()}`,
  })

  formEdit:FormGroup;
  imagesUrl:any = {poster:'',image:'',map:''};
  imgPutUrl:string = `${environment.API_URL}/commercials`
  private server: string = environment.API_URL;
  
  uploadedFiles: any[] = [];
  uploadedMap:   any[] = [];
  uploadedPoster:any[] = [];
  uploadedImage: any[] = [];

  @ViewChild('uploadPoster')  upPoster:FileUpload;
  @ViewChild('uploadMap')     upMap   :FileUpload;
  @ViewChild('uploadImg')     upImg   :FileUpload;

  eventsData = [];
  filteredEvents:any[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthenticationService,
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
      data => { 
        this.loadImg(data);
        this.initFormByObject(data);
      }
    )
  }
  goBack(){
    this.back.emit();
  }
  saveChanges(){}
  loadImg(data){
    this.imagesUrl['poster'] = data.urlPoster;
    this.imagesUrl['image']  = data.urlImage;
    this.imagesUrl['map']    = data.urlMap;
  }
  urlImg(data) {
    return this.server + data;
  }
  filterEvents(event) {    
    let params = new HttpParams();
    params = params.append('state', String(STATE.ACTIVE));
    this._eventService.seach(params)
    .subscribe(data => {
      let filter = [];
      const query = event.query;      
      this.eventsData = data.content;
      filter = [...this.eventsData.filter( item_event =>{ 
        if( (item_event.name.toLowerCase())
          .indexOf(query.toLowerCase()) >= 0){
            return {name:item_event.name,code:item_event.id}
          }else{
            return null;
          }
        })]; 
        this.filteredEvents = filter;            
      });     
      console.log(this.formEdit.get('eventId').value);
  }

  onSelectPoster(event){
    this.uploadedPoster = event['currentFiles'][0];
    console.log(this.uploadedPoster);
  }
  onSelectMap(event){
    this.uploadedMap    = event['currentFiles'][0];
  }
  onSelectImage(event){
    this.uploadedImage  = event['currentFiles'][0];
  }

  uploadHandler(file,typeImage,keyResponse,uploadController:FileUpload){
    console.log('Empezando a subir archivo');    
    const form = new FormData;
    form.append('fileitem', file, 'imagen.jpg');
    this.commercialService[typeImage](form, this.commerical_id).subscribe(
      data => {        
        this.imagesUrl[typeImage] = null;
        const eventDelay = timer(1000).subscribe( el => {
          this.imagesUrl[typeImage] = data[keyResponse];
        })
        console.log('subido')
      },
      error => {
        //console.log(error);
        console.log('fallo');
      }
    );
    uploadController.clear();
  } 
  onUpload(event){
    console.log('subiendo archivo' , event);
  }
  onProgress(event){
    console.log('subiendo progreso' , event);
  }

}
