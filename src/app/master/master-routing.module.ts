import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const MasterRoutingModule: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [      
      {
        path: 'users',
        component: UsersComponent
      },
      
    ]
  }
];