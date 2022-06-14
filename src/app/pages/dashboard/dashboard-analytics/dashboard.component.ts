import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../../../shared/breadcrumb/app.breadcrumb.service';
import { DashboardAnalyticsService } from '../dashboard-analytics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  items = []; 
  itemsPie = [];
  loading_cards:boolean          = true;
  card_success:boolean           = true;
  loading_bars_cards:boolean     = true;
  loading_pie_cards:boolean      = true;
  loading_timeline_cards:boolean = true;
  
  loading_cards_progres:number      = 0;
  loading_bars_progres:number       = 0;
  loading_pie_progres:number        = 0;
  loading_timeline_progres:number   = 0;

  constructor(
    private _breadcrumbService: AppBreadcrumbService,
    private _dashboardService:  DashboardAnalyticsService) {

    this._breadcrumbService.setItems([
      { label: 'Dashboard Analytics', routerLink: ['/dashboard/'] }
    ]);
    
    this.loadCardsCharts();

    //Serivce cards bars
    this.loading_bars_progres = 14;
    const intervalTemp = setInterval(()=>{
      this.loading_bars_progres = 100;
      const loadInterval = setInterval( ()=>{
        this.loading_bars_cards = false;
        clearInterval(loadInterval);
        clearInterval(intervalTemp);
      },1000);
    },1300)
    
    //Serivce cards pie
    this.loading_pie_progres = 36;
    const intervalTemp2 = setInterval(()=>{
      this.loading_pie_progres = 100;
      const intervalTemp = setInterval(()=>{
        this.loading_pie_cards = false;
        this.itemsPie = this._dashboardService.getChartPie();  //TODO convertir en un servicio cuando se tenga el endpoint
        clearInterval(intervalTemp2);
        clearInterval(intervalTemp);
      },1000);
    },1500);
  
    //service TimeLine
    this.loading_timeline_progres = 46;
    const intervalTemp3 = setInterval(()=>{
      this.loading_timeline_progres = 100;
      const intervalTemp = setInterval(()=>{
        this.loading_timeline_cards = false;        
        clearInterval(intervalTemp3);
        clearInterval(intervalTemp);
      },1000);
    },1500);

   }

  ngOnInit() {
    
  }

  refreshComponent(methodLoad:Function){
    methodLoad();
  }

  loadCardsCharts(){
      //Serivce cards graphs
      this.loading_cards = true;
      this.card_success = true;
      this.loading_cards_progres = 20;
      this._dashboardService.getCardChartData().subscribe( data => {
        this.loading_cards_progres = 100;
        const intervalLoading = setInterval( () => {
          this.loading_cards = false;
          this.items = data;
          this.card_success = true;
          clearInterval(intervalLoading);
        },1000);      
      }, error => {
        this.card_success = false;
        this.loading_cards = false;
        console.log('no cargaron los datos');
      },()=>{
      });
  }

}
