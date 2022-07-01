import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-stands-table',
  templateUrl: './events-stands-table.component.html',
  styleUrls: ['./events-stands-table.component.scss']
})
export class EventsStandsTableComponent implements OnInit {
  standsDatasource = [];
  
  constructor() { }

  ngOnInit() {
  }

}
