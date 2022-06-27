import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-label',
  templateUrl: './mark-label.component.html',
  styleUrls: ['./mark-label.component.scss']
})
export class MarkLabelComponent implements OnInit {
  @Input() coordX = 0;
  @Input() coordY = 0;
  @Input() numId  = 0;
  sizeX = 100;
  sizeY = 100;
  constructor() { }

  onClickStand(){
    console.log('stand : ', this.numId)
  }

  ngOnInit(): void { }
}
