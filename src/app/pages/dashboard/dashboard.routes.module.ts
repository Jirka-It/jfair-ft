import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard-analytics/dashboard.component';

const routes: Routes = [
  { 
    path:'',
    component:DashboardComponent
  },
];

export const DashboardModuleRoutes = RouterModule.forChild(routes);
