import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { AppComponent } from 'src/app/app.component';
import { DashboardAnalyticsService } from 'src/app/pages/dashboard/dashboard-analytics.service';

@Component({
  selector: 'app-card-chart-bars',
  templateUrl: './card-chart-bars.component.html',
})
export class CardChartBarsComponent implements OnInit {
  @Input('Title') title:string = '';

  chartMonthlyData: any;
  chartMonthlyOptions: any;
  @ViewChild('bar') chartViewChild: UIChart;

  constructor(public app: AppComponent,private _chartService:DashboardAnalyticsService) { }

  ngOnInit() {
    this.chartMonthlyData = this._chartService.getCardChartBarsData();
    this.chartMonthlyOptions = this.getChartOptions();
  }
    
  getChartOptions() {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        plugins: {
            legend: {
                display: true,
                labels: {
                    fontFamily,
                    fontColor: textColor
                }
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    fontFamily,
                    color: textColor
                },
                grid: {
                    color: gridLinesColor
                }
            },
            x: {
                categoryPercentage: .9,
                barPercentage: .8,
                ticks: {
                    fontFamily,
                    color: textColor
                },
                grid: {
                    color: gridLinesColor
                }
            }
        },
    };
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

  changeMonthlyDataView() {
    if (this.chartViewChild.chart.options.scales.x.stacked) {
        this.chartViewChild.chart.options.scales.x.stacked = false;
        this.chartViewChild.chart.options.scales.y.stacked = false;
    }
    else {
        this.chartViewChild.chart.options.scales.x.stacked = true;
        this.chartViewChild.chart.options.scales.y.stacked = true;
    }

    this.chartViewChild.chart.update();
  }

}
