import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {FullCalendarModule} from '@fullcalendar/angular';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';

import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import {CountryService} from './demo/service/countryservice';
import {CustomerService} from './demo/service/customerservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';


import { AuthGuard } from './authentication/auth.guard';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModuleNew } from './app-routing.module';
import { MenuService } from './menu/app.menu.service';


 export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
 }


FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModuleNew,
        //AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        FullCalendarModule,
        InputSwitchModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        RadioButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        VirtualScrollerModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        CountryService, CustomerService, EventService,  NodeService,
        PhotoService, ProductService,MenuService, 
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
