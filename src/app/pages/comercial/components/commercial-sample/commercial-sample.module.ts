import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CommercialSampleComponent } from './commercial-sample.component';
import {InputTextModule} from 'primeng/inputtext';
import {EditorModule} from 'primeng/editor';
@NgModule({
    declarations: [ CommercialSampleComponent],
    imports: [ 
        CommonModule, 
        CardModule,
        EditorModule,
        InputTextModule ],
    exports: [CommercialSampleComponent],
    providers: [],
})
export class CommercialSampleModule {}