import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { environment } from 'src/environments/environment';
import { IEvent } from '../event.metadata';
import { EventService } from '../services/events.service';

const enum STATES {ACTIVE=1,INACTIVE=0}
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  @Input() title:string   = "Nuevo Evento";
  @Input() idEvent:number = -1;
  @Output() goBack:EventEmitter<boolean> = new EventEmitter();
  
  //Eviroment  
  imgPublicUrl:string = `${environment.API_URL}`

  loading = false;
  display=false;
  eventObject = {}  

  //Form
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

  constructor(
    private formBuilder:FormBuilder,
    private eventService:EventService,    
    ) { }
  
  ngOnInit() {
    this.generateForm();
    if(this.idEvent>-1){
      this.filledFields();
    }

  }
  
  filterState(event){
    const filterResult = [...this.statesName
      .filter(filt => filt.name.toLowerCase().indexOf(event.query.toLowerCase()) >= 0 ) 
    ];
    this.filtrateStates = filterResult;
  }

  filledFields(){
    this.eventService.find(this.idEvent).subscribe(event => { 
      this.generateForm(event);
    });
  }

  generateForm(eventModel:IEvent = {}){    
    console.log(eventModel);
    this.formEvent = this.formBuilder.group({
      name:        [eventModel['name']?eventModel['name']:null, [Validators.required]],
      sigla:       [eventModel['sigla']?eventModel['sigla']:null, [Validators.required]],
      summary:     [eventModel['summary']?eventModel['summary']:null, [Validators.required]],
      description: [eventModel['description']?eventModel['description']:null, [Validators.required]],
      terms:       [eventModel['terms']?eventModel['terms']:'',   [Validators.required]],
      openDate:    [eventModel['openDate']?  new Date(eventModel['openDate'] + ' ') :null, [Validators.required]],
      closeDate:   [eventModel['closeDate']? new Date(eventModel['closeDate'] + ' ') :null, [Validators.required]],
      image:       [eventModel['image']?eventModel['image']:null, [Validators.required]],
      plan:        [eventModel['plan']?eventModel['plan']:null, [Validators.required]],
      info:        [eventModel['info']?eventModel['info']:null, [Validators.required]],
      color:       [eventModel['color']?eventModel['color']:null, [Validators.required]],
      state:       [eventModel['state']?eventModel['state']:1, [Validators.required]],
      eventId:     [eventModel['eventId']?eventModel['eventId']:null, [Validators.required]]
    });
    this.state = eventModel['state']? 
    eventModel['state'] : 'activo';    
    this.images['mapa']   = eventModel['urlMap']    ? this.imgPublicUrl+eventModel['urlMap']   : '';
    this.images['image']  = eventModel['urlImage']  ? this.imgPublicUrl+eventModel['urlImage'] : '';
    this.images['poster'] = eventModel['urlPoster'] ? this.imgPublicUrl+eventModel['urlPoster']: '';
  }

  saveform(){
    if(!this.isInvalidForm()){
      this.loading = true;
      this.formEvent.get('state').setValue(this.state.value);
      if(this.idEvent >= 0){ //Actualizar
        this.eventService.update(this.formEvent.value,this.idEvent).subscribe(
          response=>{
            console.log(response);
            this.loading = false;
            this.goBack.emit(false);
          },
          error=>{
            this.loading = false;
            console.log(error);
          }
          )
        }else{ //Crear
          this.eventService.store(this.formEvent.value).subscribe(
            response=>{
              console.log(response)
              this.loading = false;
              this.goBack.emit(false);
            },
            error=>{
            this.loading = false;
            console.log(error);
          }
        )
      }
    }   
  }
  hideForm(){    
    this.goBack.emit(false);
  }

  isValid(key){
    return this.formEvent.get(key).touched ? this.formEvent.get(key).invalid : false;
  }
  isInvalidForm(){
    this.formEvent.markAllAsTouched();
    if(!this.formEvent.get('name').valid)       { return true  }
    if(!this.formEvent.get('sigla').valid)      { return true  }
    if(!this.formEvent.get('summary').valid)    { return true  }
    if(!this.formEvent.get('description').valid){ return true }
    if(!this.formEvent.get('terms').valid)      { return true  }
    return false;
  }
  isImageLoaded(key){
    return this.images[key] ? true:false;
  }

  

}

/**
 * {
    "id": 2,
    "sigla": "teque",
    "name": "tequendama",
    "summary": "resumen",
    "description": "<p><strong>sd</strong>sddsds</p>",
    "openDate": "2019-06-14",
    "closeDate": "2019-06-14",
    "poster": null,
    "urlPoster": "/public/commercials/poster/2",
    "image": "/request-doc\\1560350238563_713.gif",
    "urlImage": "/public/commercials/image/2",
    "map": null,
    "urlMap": "/public/commercials/map/2",
    "terms": null,
    "plan": "sddsd",
    "info": "sddsd",
    "color": "#808000",
    "state": 1,
    "event": {
        "eventId": 50,
        "token": null,
        "keyWords": null,
        "sigla": null,
        "name": "III Congreso de Jóvenes Líderes en Turismo",
        "summary": null,
        "description": null,
        "startDate": null,
        "endDate": null,
        "place": null,
        "color": null,
        "startRegistrationDate": null,
        "endRegistrationDate": null,
        "baseColor": null,
        "eventType": null,
        "showPortal": null,
        "showEvents": null,
        "posterFile": null,
        "urlPosterFile": null,
        "advertisingPiece": null,
        "urlAdvertisingPiece": null,
        "registratioLink": null,
        "state": null,
        "chapter": null,
        "assembly": null
    }
}
 * 
 */
