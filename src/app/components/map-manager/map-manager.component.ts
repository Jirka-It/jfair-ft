import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-manager',
  templateUrl: './map-manager.component.html',
  styleUrls: ['./map-manager.component.scss']
})
export class MapManagerComponent implements OnInit {
  @Input() map;
  @Input() id;
  listOfCordinates = []
  @ViewChild('contenedor') content:ElementRef;
  clickedElement: Subscription = new Subscription();
  constructor() { }
  ngOnInit(): void {    
    
  }

  oMousePos(elemento, evt) {

    const ClientRect = elemento.content.nativeElement.getBoundingClientRect();
    
    const x = Math.round(evt.clientX - ClientRect.left)-15//evt.pageX -10;
    const y = Math.round(evt.clientY - ClientRect.top)-15//evt.pageY -10;  
    if(!this.spaceBussy(x,y)){
      this.listOfCordinates.push({
        x:x,
        y:y,
      });        
    }
  }

  spaceBussy(x:number,y:number):boolean{
    for(let item of this.listOfCordinates){
      if(
        (x == item.x || (x < item.x+40 && x > item.x-40) ) &&  
        (y == item.y || (y < item.y+40 && y > item.y-40) )){
        return true;
      }      
    }
    return false;
  }
}