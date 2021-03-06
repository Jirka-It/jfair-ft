import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',  
})
export class ModalComponent implements OnInit {
  @Input() buttonMessage:string = 'Continuar';
  @Input() message:string = 'Lorem ipmsu';
  @Input() header:string = '';
  @Input() display:boolean = true;

  constructor() { }

  ngOnInit(): void { }
}
