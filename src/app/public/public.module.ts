import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './landing/landing.component';

import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicRoutingModule), 
    ButtonModule
  ]
})
export class PublicModule { }
