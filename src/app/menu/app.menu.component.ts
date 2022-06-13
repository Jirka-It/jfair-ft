import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-menu',
    template: `    
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Favorites', icon: 'pi pi-fw pi-home',
                items: [                  
                    {
                        label: 'Dashboard Analytics', 
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['administration/dashboard'], 
                        badge: '2', 
                        badgeClass: 'p-badge-success'
                    }
                ]
            },            
        ];
    }
}
