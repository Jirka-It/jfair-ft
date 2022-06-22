import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoomsComponent } from './events-rooms/events-rooms.component';
import { EventsRoutingModule } from './events.routing';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
    declarations: [
    EventsComponent,
    CreateEventComponent,
    EventsRoomsComponent
  ],
    imports: [ CommonModule,EventsRoutingModule ],
    exports: [],
    providers: [],
})
export class EventsModule {}