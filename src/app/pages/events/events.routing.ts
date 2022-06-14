import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsRoomsComponent } from './events-rooms/events-rooms.component';

const routes: Routes = [
    { path: 'rooms', component: EventsRoomsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {}
