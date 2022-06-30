import { Component, ElementRef, Input, OnInit, Output, ViewChild,EventEmitter, HostListener } from '@angular/core';
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
  @Output() pointEvent:EventEmitter<any> = new EventEmitter();  
  @Input('coords') listOfCordinates = []
  @ViewChild('contenedor') content:ElementRef;
  clickedElement: Subscription = new Subscription();
  sizeDiferent = 15;
  innerWidth: number;
  isSmall = false;
  constructor() { }
  ngOnInit(): void {    
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(innerWidth <= 768){
      this.sizeDiferent = 15;
      this.isSmall = true;
    }else{
      this.isSmall = false;
      this.sizeDiferent = 15;
    }
  }

  oMousePos(elemento, evt) {
    const ClientRect = elemento.content.nativeElement.getBoundingClientRect();    
    const x = Math.round(evt.clientX - ClientRect.left)//evt.pageX -10;
    const y = Math.round(evt.clientY - ClientRect.top) //evt.pageY -10;  
    const sx = Math.round(evt.clientX - ClientRect.left) -56//evt.pageX -10;
    const sy = Math.round(evt.clientY - ClientRect.top)  -30//evt.pageY -10;  
    if(!this.spaceBussy(x,y)){
      let coord = {  
        x, 
        y,
        sx,
        sy 
      };
      console.log(coord);
      this.pointEvent.emit(coord);             
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