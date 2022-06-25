import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEventComponent } from './table-event.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    declarations: [
        TableEventComponent
    ],
    imports: [ 
        CommonModule,
        TableModule,
        TabViewModule,
        AutoCompleteModule,
        MultiSelectModule,
        TooltipModule,
        NgxLoadingModule.forRoot({}),
        ButtonModule
     ],
    exports: [TableEventComponent],
    providers: [],
})
export class TableEventsModule {}