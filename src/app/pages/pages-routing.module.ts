import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication/auth.guard';
import { DashboardComponent } from './dashboard/dashboard-analytics/dashboard.component';
import { PagesComponent } from './pages.component';
//import { DashboardComponent } from '../analytics/dashboard/dashboard.component';
export const PagesRoutingModule: Routes = [
  { 
    path:'',    
    children:[
      {
        path: "dashboard",        
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)    
      },  
    ]
  },
  {
    path:'**',
    redirectTo:'/login'
  }  
];