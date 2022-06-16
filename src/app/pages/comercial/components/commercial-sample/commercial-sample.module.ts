import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CommercialSampleComponent } from './commercial-sample.component';
import {InputTextModule} from 'primeng/inputtext';
import {EditorModule} from 'primeng/editor';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ColorPickerModule } from 'primeng/colorpicker';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
    declarations: [ CommercialSampleComponent],
    imports: [ 
        CommonModule, 
        CardModule,
        EditorModule,
        InputTextModule,
        ReactiveFormsModule,
        CalendarModule,
        FileUploadModule,
        ColorPickerModule,
        AutoCompleteModule
     ],
    exports: [CommercialSampleComponent],
    providers: [],
})
export class CommercialSampleModule {}