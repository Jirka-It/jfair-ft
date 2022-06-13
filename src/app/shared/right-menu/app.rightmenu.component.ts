import { Component } from '@angular/core';
import { PagesComponent } from 'src/app/pages/pages.component';
import { AppComponent } from '../..//app.component';

@Component({
    selector: 'app-rightmenu',
    templateUrl: './app.rightmenu.component.html'
})
export class RightMenuComponent {
    constructor(public pagesMain: PagesComponent, public app: AppComponent) {}
}
