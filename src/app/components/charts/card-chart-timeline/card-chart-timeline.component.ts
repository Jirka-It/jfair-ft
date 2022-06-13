import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'card-chart-timeline',
  templateUrl: './card-chart-timeline.component.html'  
})
export class CardChartTimeLineComponent implements OnInit {
  @Input('Title') title:string = 'NaN';
  lineData: any;
  lineOptions: any;
  constructor(public app: AppComponent) { }

  ngOnInit(): void {
    this.lineData = this.getLineData();
    this.lineOptions = this.getChartOptions();
   }
  getLineData() {
    const isLight = this.app.layoutMode === 'light';
    const dataset1Color = isLight ? '#00ACC1' : '#4DD0E1';
    const dataset2Color = isLight ? '#FF9800' : '#FFB74D';

    return {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic'],
        datasets: [
            {
                label: 'Diego Sanchez',
                data: [65, 59, 80, 81, 56, 55, 40,34,25,65,43,50],
                fill: false,
                backgroundColor: dataset1Color,
                borderColor: dataset1Color,
                tension: .4
            },
            {
                label: 'Johan López',
                data: [28, 48, 40, 19, 86, 27, 90,10,43,23,65,32],
                fill: false,
                backgroundColor: dataset2Color,
                borderColor: dataset2Color,
                tension: .4
            }
        ]
    };
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
                    fontColor: textColor,
                }
            }
        },
        responsive: true,
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
                ticks: {
                    fontFamily,
                    color: textColor
                },
                grid: {
                    color: gridLinesColor
                }
            }
        }
    };
}

}
