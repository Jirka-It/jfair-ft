import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercialComponent } from './comercial.component';
import { ExposicionesComponent } from './exposiciones/exposiciones.component';
import { ComercialRoutingModule } from './comercial.routing';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
    ComercialComponent,
    ExposicionesComponent,    
  ],
    imports: [ CommonModule,ComercialRoutingModule,ComponentsModule ],
    exports: [],
    providers: [],
})
export class ComercialModule {}