import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoomsComponent } from './events-rooms/events-rooms.component';
import { EventsRoutingModule } from './events.routing';
import { CreateEventComponent } from './create-event/create-event.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ColorPickerModule } from 'primeng/colorpicker';
import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import {DialogModule} from 'primeng/dialog';
import { ImageUploadModalComponent } from './create-event/image-upload-modal/image-upload-modal.component';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
    declarations: [
    EventsComponent,
    CreateEventComponent,
    EventsRoomsComponent,
    ImageUploadModalComponent
  ],
    imports: [       
      FormsModule,
      CommonModule,
      DialogModule,
      EditorModule,
      ToolbarModule,
      CalendarModule,
      InputTextModule,
      FileUploadModule,
      ColorPickerModule,           
      ImageCropperModule,
      AutoCompleteModule,
      EventsRoutingModule,
      ReactiveFormsModule,  
     ],

    exports: [],
    providers: [],
})
export class EventsModule {} 