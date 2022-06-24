import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  title:string = 'Eventos';
  constructor() { }

  ngOnInit(): void {
  }
  setTitle(title:string){
    this.title = title;
  }

}
