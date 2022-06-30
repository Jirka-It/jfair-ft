import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-stands',
  templateUrl: './events-stands.component.html',
  styleUrls: ['./events-stands.component.scss']
})
export class EventsStandsComponent implements OnInit {
  standForm = false;
  actualCoordinates = {};
  coordinatesList = [];
  constructor() { }

  ngOnInit() {
  }

  openForm(coordinates){
    this.actualCoordinates = coordinates;
    this.standForm = true;    
  }

  saveData(coordinates){
    this.coordinatesList.push(coordinates);
    this.closeModal();
  }
  closeModal(){
    this.standForm = false;
  }

}
