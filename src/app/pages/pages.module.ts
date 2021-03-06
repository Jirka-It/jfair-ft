import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';


import { PagesComponent } from './pages.component';
import { AppMenuComponent } from '../menu/app.menu.component';
import { AppInlineMenuComponent } from '../menu/app.inlinemenu.component';
import { AppMenuitemComponent } from '../menu/app.menuitem.component';
import { SharedModule } from '../shared/app-shared.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,    
    AppMenuComponent,        
    AppMenuitemComponent,
    AppInlineMenuComponent,    
  ],
  imports: [
    FormsModule,    
    SharedModule,
    CommonModule,
    ButtonModule,
    MegaMenuModule,    
    ComponentsModule,    
    AutoCompleteModule,
    RouterModule.forChild(PagesRoutingModule), 
  ] ,
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},       
], 
})
export class PagesModule { }
