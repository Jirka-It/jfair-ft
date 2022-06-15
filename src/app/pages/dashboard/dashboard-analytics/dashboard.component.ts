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
