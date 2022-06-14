import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExposicionesComponent } from './exposiciones/exposiciones.component';
import { ComercialComponent } from './comercial.component';

const routes: Routes = [
    { 
        path: '', 
        component: ComercialComponent ,
        children:[
            { path: 'expo', component: ExposicionesComponent }
        ]
    }
    
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComercialRoutingModule {}
