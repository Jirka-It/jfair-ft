import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  title:string = 'Eventos';
  isEdit:boolean = false;
  isStand:boolean = false;
  idEvent:number = -1;

  cities:any = [];

  selectedCities: [];
  constructor(private location:Router) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {  
    this.closeEdit(false);  
  }
  setTitle(title:string){
    this.title = title;
  }
  setOptions(option:any){        
    console.log(option);
    this.idEvent=JSON.parse(option)['idEvent'];
    switch (JSON.parse(option)['optionKey']) {
      case "EDIT":{   this.isEdit=true; break;}                    
      case "STAND":{ this.isStand=true; break;}                    
      default:
        break;
    }    
  }
  closeEdit(value:boolean){
    this.isEdit = value;
  }
  isEventRoute():boolean{
    return (this.location.url == ('/eventos'));
  }

}
