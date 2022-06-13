import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardComponent } from './dashboard-analytics/dashboard.component';
import { DashboardModuleRoutes } from './dashboard.routes.module';
import { SharedModule } from 'src/app/shared/app-shared.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [ CommonModule,ComponentsModule,DashboardModuleRoutes,SharedModule ],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}