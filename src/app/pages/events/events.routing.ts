import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events.component';

const routes: Routes = [
    { 
        path: '', component: EventsComponent, 
        children:[
            { path: 'nuevo', component: CreateEventComponent }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {}
