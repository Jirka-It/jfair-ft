import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './authentication/auth.guard';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {            
    path: '',     
    canActivate: [AuthGuard],
    component:PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },  
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleNew {}
