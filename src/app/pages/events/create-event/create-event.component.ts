import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

const enum STATES {ACTIVE=1,INACTIVE=0}
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  title:string = "Nuevo Evento";
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


  imageChangedEvent: any = '';
  croppedImage: any = '';

  uploadImage(id){    
    document.getElementById(id).click();
  }
  
  fileChangeEvent(event: any,key): void {
    this.imageChangedEvent = event;        
    this.enableCropByPreview(key);
  }

  imageCropped(event: ImageCroppedEvent) {      
    this.setPreview(event.base64);
    this.croppedImage = event.base64;      
  }

  imageLoaded(image: LoadedImage) {    
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  
  enableCropByPreview(key){
    console.log(key);
    switch (key) {
      case 'imagen':{this.crop_img_displ  = true; break;}
      case 'poster':{this.crop_post_displ = true; break;}
      case 'mapa':  {this.crop_map_displ = true; break;    }
      default: break;
    }
  }

  disableCropByPreview(){
    this.crop_img_displ = false;
    this.crop_post_displ = false;
    this.crop_map_displ = false;
  }

  setPreview(base64Img){
    if(this.crop_post_displ) {this.images['poster'] = base64Img;} else
    if(this.crop_map_displ)  {this.images['mapa']   = base64Img;} else
    if(this.crop_img_displ)  {this.images['image']  = base64Img;}
  }

}
