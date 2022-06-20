import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';


import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import { NgxLoadingModule } from "ngx-loading";


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { SharedModule } from '../shared/app-shared.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastrModule } from 'ngx-toastr';
 export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
 }

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutingModule),
    CardModule,
    ChipModule,
    FormsModule,
    BadgeModule,
    ChipsModule,
    SharedModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    AccordionModule,
    BreadcrumbModule,
    ProgressBarModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({}),
    NgxLoadingModule.forRoot({}),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers:
  [
    AuthenticationService,
  ],
})
export class AuthenticationModule { }
