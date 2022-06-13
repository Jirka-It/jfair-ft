import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-section',
  styles:[`
  .card{
    width:100%;     
    }`],

  template:`
  <div class="card">
    <h5>{{titleSection}}</h5>
    <div class="grid">
        <div class="col">          
          <p-progressBar [value]="progress" [showValue]="false"></p-progressBar>
        </div>      
    </div>
  </div>
  `  
})
export class ProgressSectionComponent implements OnInit {
  @Input('TitleSection') titleSection:string =" [NAN]";
  @Input('Value') progress:number = 50;
  constructor() { }

  ngOnInit(): void { }
}
