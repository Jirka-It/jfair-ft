import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AnalyticsRoutingModule: Routes = [
  {
    path: '',
    children: [      
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      
    ]
  }
];