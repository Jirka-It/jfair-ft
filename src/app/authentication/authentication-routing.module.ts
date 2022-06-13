import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AuthenticationRoutingModule: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [      
      {
        path: 'login',
        component: LoginComponent
      },
      
    ]
  },
  {
    path:'**',
    component:LoginComponent,
    redirectTo:' '
  }
];