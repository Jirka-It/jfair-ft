import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercialComponent } from './comercial.component';
import { ExposicionesComponent } from './exposiciones/exposiciones.component';
import { ComercialRoutingModule } from './comercial.routing';
import { ComponentsModule } from 'src/app/components/components.module';
import { TableCommercialModule } from './components/commercial-table/table-commercial.module';
import { CommercialSectionService } from './services/commercial-section.service';
import { CommercialSampleComponent } from './components/commercial-sample/commercial-sample.component';
import { CommercialSampleModule } from './components/commercial-sample/commercial-sample.module';

@NgModule({
    declarations: [
    ComercialComponent,
    ExposicionesComponent,        
  ],
    imports: [ 
      CommonModule,
      ComercialRoutingModule,
      ComponentsModule,
      CommercialSampleModule,
      TableCommercialModule ],
    exports: [],
    providers: [
      CommercialSectionService
    ],
})
export class ComercialModule {}