import { Component, Input, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'card-chart-pie',
  templateUrl: './card-chart-pie.html'
})
export class CardChartPieComponent implements OnInit , AfterViewInit {
  @Input('Title') title:string = 'NaN';
  @Input('Donut') isDonut:boolean = false;
  @Input('SemiCircle') isSemiCircle:boolean = false;
  @Input('Data') data:any = {};
  
  @ViewChild('doughnut') doughnutViewChild: UIChart;
  doughnutData: any;
  doughnutOptions: any;
  constructor(public app:AppComponent) { }
  ngAfterViewInit(): void {
    if(this.isDonut){
      this.donut();
    }else{
      this.pie();
    }
    if(this.isSemiCircle){
      this.semiCircle();
    }else{
      this.circle();
    }
  }

  ngOnInit(): void {    
    this.doughnutOptions = this.getDoughnutOptions();    
   }
   
  
  getDoughnutOptions() {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    fontFamily,
                    fontColor: textColor
                }
            },
        },
        circumference: 180,
        rotation: -90,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };
  }
  
  circle(){
    this.doughnutViewChild.chart.options.circumference = 360;
    this.doughnutViewChild.chart.options.rotation = -45;
    this.doughnutViewChild.chart.update();
  }
  semiCircle(){
    this.doughnutViewChild.chart.options.circumference = 180;
    this.doughnutViewChild.chart.options.rotation = -90;
    this.doughnutViewChild.chart.update();
  }
  donut(){
    this.doughnutViewChild.chart.options.cutout = '50%';
    this.doughnutViewChild.chart.update();
  } 
  pie(){
    this.doughnutViewChild.chart.options.cutout = '0';
    this.doughnutViewChild.chart.update();
  } 

  changeDoughnutDataView() {
    if (this.doughnutViewChild.chart.options.circumference === 180) {
        this.doughnutViewChild.chart.options.circumference = 360;
        this.doughnutViewChild.chart.options.rotation = -45;
    } else {
        this.doughnutViewChild.chart.options.circumference = 180;
        this.doughnutViewChild.chart.options.rotation = -90;
    }

    this.doughnutViewChild.chart.update();
  }

  getColors() {
    const isLight = this.app.layoutMode === 'light';
    return {
        pinkColor: isLight ? '#EC407A' : '#F48FB1',
        purpleColor: isLight ? '#AB47BC' : '#CE93D8',
        deeppurpleColor: isLight ? '#7E57C2' : '#B39DDB',
        indigoColor: isLight ? '#5C6BC0' : '#9FA8DA',
        blueColor: isLight ? '#42A5F5' : '#90CAF9',
        lightblueColor: isLight ? '#29B6F6' : '#81D4FA',
        cyanColor: isLight ? '#00ACC1' : '#4DD0E1',
        tealColor: isLight ? '#26A69A' : '#80CBC4',
        greenColor: isLight ? '#66BB6A' : '#A5D6A7',
        lightgreenColor: isLight ? '#9CCC65' : '#C5E1A5',
        limeColor: isLight ? '#D4E157' : '#E6EE9C',
        yellowColor: isLight ? '#FFEE58' : '#FFF59D',
        amberColor: isLight ? '#FFCA28' : '#FFE082',
        orangeColor: isLight ? '#FFA726' : '#FFCC80',
        deeporangeColor: isLight ? '#FF7043' : '#FFAB91',
        brownColor: isLight ? '#8D6E63' : '#BCAAA4'
    };
  }

}
