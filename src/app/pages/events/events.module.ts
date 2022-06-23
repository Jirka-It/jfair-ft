import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoomsComponent } from './events-rooms/events-rooms.component';
import { EventsRoutingModule } from './events.routing';
import { CreateEventComponent } from './create-event/create-event.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';

@NgModule({
    declarations: [
    EventsComponent,
    CreateEventComponent,
    EventsRoomsComponent
  ],
    imports: [ 
      CommonModule,
      EventsRoutingModule,
      CalendarModule,
      InputTextModule,
      EditorModule ],

    exports: [],
    providers: [],
})
export class EventsModule {}