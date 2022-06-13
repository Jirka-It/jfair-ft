import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const PublicRoutingModule: Routes = [
  {
    path: '',
    component: LandingComponent, 
    children: [      
      {
        path: 'landing',
        component: LandingComponent
      },
      
    ]
  }
];