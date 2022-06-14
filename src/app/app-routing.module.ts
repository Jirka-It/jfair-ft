import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './authentication/auth.guard';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {            
    path: '', 
    component:   PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'administration',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }     
    ]
  },
  {
    path: 'template',
    component:AppMainComponent,
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'analytics/demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule),
      },
      {
        path: 'analytics/master',
        loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
      },
      
    ]
  },
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleNew {}
