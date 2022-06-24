import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { TooltipModule} from 'primeng/tooltip';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CardChartComponent } from './charts/card-chart/card-chart.component';
import { CardChartBarsComponent } from './charts/card-chart-bars/card-chart-bars.component';
import {TabViewModule} from 'primeng/tabview';

import { CardChartPieComponent } from './charts/card-chart-pie/card-chart-pie';
import { CardChartTimeLineComponent } from './charts/card-chart-timeline/card-chart-timeline.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImageManagerComponent } from './image-manager/image-manager.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    MenuBarComponent,
    CardChartComponent,
    CardChartPieComponent,
    CardChartBarsComponent,
    ImageManagerComponent,
    CardChartTimeLineComponent,
    ],

  imports: [ 
    MenuModule,
    ChartModule,
    TableModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    CommonModule,
    MenubarModule,
    TabViewModule,
    TooltipModule,
    FileUploadModule,
    MultiSelectModule,
    AutoCompleteModule,
    ImageCropperModule,
  ],

  exports: [CardChartComponent,
    MenuBarComponent,    
    CardChartPieComponent,
    ImageManagerComponent,
    CardChartBarsComponent,
    CardChartTimeLineComponent]  
})
export class ComponentsModule {}