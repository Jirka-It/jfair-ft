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
  idEvent:number = -1;
  constructor(private location:Router) { }

  ngOnInit(): void {  
    this.closeEdit(false);  
  }
  setTitle(title:string){
    this.title = title;
  }
  setOptions(option:any){        
    this.idEvent=JSON.parse(option)['idEvent'];
    switch (JSON.parse(option)['optionKey']) {
      case "EDIT":{ this.isEdit=true; break;}                    
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
