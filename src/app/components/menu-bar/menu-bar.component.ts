import { MenuItem } from 'primeng/api';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls:['./menu-bar.component.scss'],  
})
export class MenuBarComponent implements OnInit {
  @Output() filtersSelecteds:EventEmitter<any> = new EventEmitter();
  

  years:any[];
  selectedYearsAdvance:any[];

  months: any[];
  selectedMonthsAdvanced: any[];
  
  filterUsers:any[];  
  selectedUsers:any[];

  filtersActives = {
    year:['ALL'],
    month:['ALL'],
    user:['ALL'],
  }

  constructor(private _dashboardService:DataService) { }

  ngOnInit(): void {
    this.months = [
        {name:'Enero',code:'Ene'},
        {name:'Febrero',code:'Feb'},
        {name:'Marzo',code:'Mar'},
        {name:'Mayo',code:'May'},
        {name:'Junio',code:'Jun'},
        {name:'Julio',code:'Jul'},
        {name:'Agosto',code:'Ago'},
        {name:'Septiembre',code:'Sep'},
        {name:'Octubre',code:'Oct'},
        {name:'Noviembre',code:'Nov'},
        {name:'Diciembre',code:'Dic'},        
    ]
    this.years = [
        {name:'2022'},
        {name:'2021'},
        {name:'2020'},
        {name:'2019'},
        {name:'2018'},
        {name:'2017'},
    ];   
   }
   
    filterUsersEvent(event:any){
       console.log(event);
       this.filterUsers = [
        {name:'Daniel',code:'Ene'},
        {name:'Johan',code:'Feb'},
        {name:'Pablo',code:'Mar'},
        ]
   }
   
   inputAllMarket(){
     console.log('Filt menu')
     if(this.selectedYearsAdvance.length <= 0){
        this.filtersActives['year'] = ['ALL'];
     }
     if(this.selectedMonthsAdvanced.length >= 12 || this.selectedMonthsAdvanced.length <= 0){
      this.filtersActives['month'] = ['ALL'];
     }
     if(this.selectedUsers.length <= 0){
      this.filtersActives['user'] = ['ALL'];
     }
   }
}
