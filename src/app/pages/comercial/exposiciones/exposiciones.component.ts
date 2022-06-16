import { Component, OnInit } from '@angular/core';
enum options {
  SUMMARY,
  EDIT,
  MAP,  
}
@Component({
  selector: 'app-exposiciones',
  templateUrl: './exposiciones.component.html',
  styleUrls: ['./exposiciones.component.scss']
})
export class ExposicionesComponent implements OnInit {
  actualOptionActive:any = options.SUMMARY;
  actualIdSelected:any;
  constructor() { }

  ngOnInit(): void {
  }

  commercialOptions(objectEvent:any)
  {
    const eventReturned = JSON.parse(objectEvent);
    this.actualIdSelected = eventReturned.idEvent;
    this.actualOptionActive = options[eventReturned.optionKey];
  }

  actualState(key:string){
    return this.actualOptionActive == options[key];
  }

  defaultSummary(){
    this.actualIdSelected = -1;
    this.actualOptionActive = options.SUMMARY;
  }

}
