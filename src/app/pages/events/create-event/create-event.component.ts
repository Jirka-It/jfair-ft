import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

const enum STATES {ACTIVE=1,INACTIVE=0}
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  @Input() title:string   = "Nuevo Evento";
  @Input() idEvent:number = -1;

  display=false;
  
  crop_post_displ = false;
  crop_img_displ    = false;
  crop_map_displ    = false;

  formEvent:FormGroup;
  valColor:string;
  
  state:any = {name:"activo"  ,value:1};
  statesName = [
    {name:"activo"  ,value:1},
    {name:"inactivo",value:0},
  ]
  filtrateStates = [];

  images = {
    poster:'',
    image:'',
    mapa:''
  }

  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.generateForm();

  }
  filledFields(){
    
  }
  filterState(event){
    const filterResult = [...this.statesName
      .filter(filt => filt.name.toLowerCase().indexOf(event.query.toLowerCase()) >= 0 ) 
    ];
    this.filtrateStates = filterResult;
  }

  generateForm(){
    this.formEvent = this.formBuilder.group({
      name:        [null, [Validators.required]],
      sigla:       [null, [Validators.required]],
      summary:     [null, [Validators.required, Validators.maxLength(250)]],
      description: [null, [Validators.required]],
      terms:       ['',   [Validators.required]],
      openDate:    [null, [Validators.required]],
      closeDate:   [null, [Validators.required]],
      image:       [null, [Validators.required]],
      plan:        [null, [Validators.required]],
      info:        [null, [Validators.required]],
      color:       [null, [Validators.required]],
      state:       [1, [Validators.required]],
      eventId:     [null, [Validators.required]]
    });
  }

  saveform(){
    this.isInvalidForm();
    this.formEvent.get('state').setValue(this.state.value);
    console.log(this.formEvent.value);
  }

  isValid(key){
    return this.formEvent.get(key).touched ? this.formEvent.get(key).invalid : false;
  }
  isInvalidForm(){
    this.formEvent.markAllAsTouched();
    if(this.formEvent.get('name').valid){ console.log('nombre valido'); }
    if(this.formEvent.get('sigla').valid){ console.log('sigla valido'); }
    if(this.formEvent.get('summary').valid){ console.log('summary valido'); }
    if(this.formEvent.get('description').valid){ console.log('description valido'); }
    if(this.formEvent.get('terms').valid){ console.log('terms valido'); }
  }
  isImageLoaded(key){
    return this.images[key] ? true:false;
  }

}
