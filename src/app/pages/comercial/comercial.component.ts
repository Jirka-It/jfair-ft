import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/shared/breadcrumb/app.breadcrumb.service';

@Component({
  selector: 'app-comercial',
  templateUrl: './comercial.component.html',
  styleUrls: ['./comercial.component.scss']
})
export class ComercialComponent implements OnInit {

  constructor(
    private _breadcrumbService: AppBreadcrumbService) {

    this._breadcrumbService.setItems([
      { label: 'Comercial', routerLink: ['/administracion/comercial/'] }
    ]);
  }

  ngOnInit(): void {
  }

}
