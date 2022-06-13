import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { MessageModule } from 'primeng/message';
import { ModalComponent } from './modal/modal.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressBarModule } from 'primeng/progressbar';


import { ToastComponent } from './toast/toast.component';
import { NavBarComponent } from './nav-bar/navbar.component';
import { RightMenuComponent } from './right-menu/app.rightmenu.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppBreadcrumbComponent } from './breadcrumb/app.breadcrumb.component';
import { ProgressSectionComponent } from './progress-section/progress-section.component';


@NgModule({
  declarations: [
    RightMenuComponent,
    ProgressSectionComponent,
    NavBarComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    ModalComponent,
    ToastComponent],

  imports: [ 
    CommonModule,
    BreadcrumbModule,
    ProgressBarModule,
    SidebarModule,
    ButtonModule,
    DialogModule,
    MessageModule,
    ToastModule ],

  exports: [
    ModalComponent,
    NavBarComponent,
    RightMenuComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    ProgressSectionComponent,
    ToastComponent],
  providers: [],
})
export class SharedModule {}