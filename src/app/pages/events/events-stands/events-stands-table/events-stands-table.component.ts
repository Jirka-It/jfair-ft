import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-stands-table',
  templateUrl: './events-stands-table.component.html',
  styleUrls: ['./events-stands-table.component.scss']
})
export class EventsStandsTableComponent implements OnInit {
  standsDatasource = [{
    id:8,
    name:'faire stand',
    openDate:'01-02-22',
    closeDate:'01-02-22',
    options:[]
  }];

  constructor() { }

  ngOnInit() {
  }

}
