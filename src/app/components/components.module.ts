import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';


import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CardChartComponent } from './charts/card-chart/card-chart.component';
import { CardChartBarsComponent } from './charts/card-chart-bars/card-chart-bars.component';

import { CardChartPieComponent } from './charts/card-chart-pie/card-chart-pie';
import { CardChartTimeLineComponent } from './charts/card-chart-timeline/card-chart-timeline.component';
import { TableComponent } from './table/table.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [
    MenuBarComponent,
    CardChartComponent,
    TableComponent,
    CardChartPieComponent,
    CardChartBarsComponent,
    CardChartTimeLineComponent
    ],

  imports: [ CommonModule,
    ChartModule,
    MenuModule,
    FormsModule,
    MenubarModule,
    TableModule,
    AutoCompleteModule,
    MultiSelectModule,
    ButtonModule],

  exports: [CardChartComponent,
    MenuBarComponent,
    TableComponent,
    CardChartPieComponent,
    CardChartBarsComponent,
    CardChartTimeLineComponent]  
})
export class ComponentsModule {}