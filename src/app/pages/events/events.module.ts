import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoomsComponent } from './events-rooms/events-rooms.component';
import { EventsRoutingModule } from './events.routing';

@NgModule({
    declarations: [
    EventsComponent,
    EventsRoomsComponent
  ],
    imports: [ CommonModule,EventsRoutingModule ],
    exports: [],
    providers: [],
})
export class EventsModule {}