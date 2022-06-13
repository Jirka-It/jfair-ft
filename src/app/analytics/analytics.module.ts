import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnalyticsRoutingModule } from './analytics-routing.module'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 

import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnalyticsRoutingModule), 
    ButtonModule
  ]
})
export class AnalyticsModule { }
