import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { AuthGuard } from './authentication/auth.guard';
import { AppMainComponent } from './app.main.component';
import { LandingComponent } from './public/landing/landing.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
          {
            path: '',
            component: LandingComponent,
          },
          {
            
            path: '', component: AppMainComponent,canActivate: [AuthGuard],
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
          {
            path: 'analytics/authentication',
            loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
          },
          {
            path: '',
            loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
          },
          {path: '**', redirectTo: '/'},
        ],{ useHash: true,scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
},)
export class AppRoutingModule {
}
