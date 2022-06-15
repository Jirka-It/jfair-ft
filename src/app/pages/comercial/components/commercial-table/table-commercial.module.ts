import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCommercialComponent } from './table-commercial.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [
        TableCommercialComponent
    ],
    imports: [ 
        CommonModule,
        TableModule,
        TabViewModule,
        AutoCompleteModule,
        MultiSelectModule,
        TooltipModule,
        ButtonModule
     ],
    exports: [TableCommercialComponent],
    providers: [],
})
export class TableCommercialModule {}