import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAnalyticsService {
  labelsMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre','Octubre','Noviembre','Diciembre'];
  constructor(private _dataService:DataService){}

  getCardChartData():Observable<any>{
    return this._dataService.getAnalyticCount().pipe(
      map( (resp:any[]) =>{ 
        const data = resp.map( element =>  {return {
          title:element.name,
          count:element.count,
          id:element.id,
          icon:this.getIconById(element.id),
          data:{
            labels:this.labelsMonths,
            datasets:[{
              data:this.generateYearData(),
              borderColor:this.getColorById(element.id).borderColor,
              backgroundColor:this.getColorById(element.id).backgroundColor,
              borderWidth: 2,
              fill: true,
              tension: .4,              
            }]
          }
        }});
        return [...data.filter(item => item.id != 6)]
      }));
  }
  getCardChartBarsData(){
    const labels = [...this.labelsMonths.map( lab => lab.substring(0,3))];
    const bars = [];
    for (let index = 0; index < 12; index++) {
      bars[index] = {
        label:index < 9 ?`201${index+1}`:`20${index+11}`,
        data: this.generateYearData(),
        borderColor:this.getColorById(index).backgroundColor,
        backgroundColor:this.getColorById(index).backgroundColor,
        borderWidth:2,
        fill:true
      }      
    }    
    const chartBars = {
      labels:labels,
      datasets:bars
    }
    return chartBars;
  }
  getChartPie(){
    const pies = [];
    pies.push({
      title:'Tipos de Casos',
      donut:false,
      semiCircle:false,
      data:this.getChartPieData(
        ['Administrativa','Soporte Tecnico'],
        ['#29B6F6','#FFA726'],
        [25,75]
      )
    });
    pies.push({
      title:'Calificación de Casos',
      donut:true,
      semiCircle:false,
      data:this.getChartPieData(
        ['Calificados','No Calificados'],
        ['#FFEE58','#EC407A'],
        [23,40])
    });
    pies.push({
      title:'Calificaciones',
      donut:true,
      semiCircle:true,
      data:this.getChartPieData(
        ['Malo','Regular','Aceptable','Bueno','Excelente'],
        ['#F93154','#FF8F00','#FDD835','#BCD9A1','#9CCC65']
      )
    });
    return pies;
  }
  getChartPieData(labels:string[],colors:string[],values?:number[]):any{   
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)'; 
    let numericData = values? values :new Array(labels.length).fill(Math.floor(Math.random() * 10) + 1);
    return {
      labels: labels,
      datasets: [
          {
              data: numericData,
              backgroundColor: colors,
              borderColor
          }
      ]
    };

  }
  private generateYearData(){
    return [
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
      (Math.random() * (100 - 1 + 1) + 1),
    ]
  }
  private getColorById(id:number){
    switch (id) {
      case 1:return {borderColor: ['#9F4368'],backgroundColor: ['#D47BA0',],};
      case 2:return {borderColor: ['#9E7944'],backgroundColor: ['#D3CB7D',],};
      case 3:return {borderColor: ['#44639F'],backgroundColor: ['#7EB9D3',],};
      case 5:return {borderColor: ['#449E45'],backgroundColor: ['#82C285',],};
      case 6:return {borderColor: ['#26A69A'],backgroundColor: ['#80CBC4',],};
      case 7:return {borderColor: ['#66BB6A'],backgroundColor: ['#A5D6A7',],};
      case 8:return {borderColor: ['#9CCC65'],backgroundColor: ['#C5E1A5',],};
      case 9:return {borderColor: ['#D4E157'],backgroundColor: ['#E6EE9C',],};
      case 10:return {borderColor: ['#FFEE58'],backgroundColor: ['#FFF59D',],};
      case 11:return {borderColor: ['#FFCA28'],backgroundColor: ['#FFE082',],};
      case 12:return {borderColor: ['#FF7043'],backgroundColor: ['#FFAB91',],};                          
      default: return {borderColor: ['#8D6E63'],backgroundColor: ['#BCAAA4',],};         
    }
  }
  private getIconById(id:number){
    switch (id) {
      case 1:return 'pi-info-circle'
      case 2:return 'pi-clock'
      case 3:return 'pi-check'
      case 5:return 'pi-database'
      default: return 'pi-info-circle'    
    }
  }

}