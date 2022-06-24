import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  title:string = 'Eventos';
  isEdit:boolean = false;
  idEvent:number = -1;
  constructor() { }

  ngOnInit(): void {
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

}
