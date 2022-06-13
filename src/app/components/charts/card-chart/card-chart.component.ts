import { Component, Input, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})
export class CardChartComponent implements OnInit {
  
  @Input('Count')     count:number  = 0;
  @Input('Title')     title:string  = 'NaN';
  @Input('Symbol')    icon:string   = 'pi-clock';
  @Input('Success')   isSuccess     = true;
  @Input('DataChart') dataChart:any = {};
  overviewChartOptions1: any;

  constructor(
    public app:AppComponent
  ) { }

  ngOnInit(): void { 
    this.overviewChartOptions1 = {
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  display: false
              },
              x: {
                  display: false
              }
          },
          tooltips: {
              enabled: false
          },
          elements: {
              point: {
                  radius: 0
              }
          },
    };
    
  }

}
