import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-menu',
    template: `    
        <ul class="layout-menu">
            <li app-menuitem (eventSelected)="isSelect($event)" *ngFor="let item of modelAdmin; let i = index;" [item]="item" [index]="i" [root]="true"></li>
            <ng-container *ngIf="isEventSelected" #isSelectEvent>
                <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
            </ng-container>
            
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
    modelAdmin: any[];
    isEventSelected:boolean = true;

    constructor(public app: AppComponent) {}
    isSelect(event){
        console.log(event);
    }
    ngOnInit() {
        this.modelAdmin = [
            {
                label: 'Administración', icon: 'pi pi-fw pi-cog',admin:true,                
                items: [                  
                    {
                        label: 'Nuevo evento', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['eventos/nuevo'],
                        admin:true
                    },
                    {
                        label: 'Eventos', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['eventos'],
                        admin:true                                           
                    },
                    {
                        selector:true,
                        admin:true
                    }
                ],
            }
        ]
        this.model = [            
           
            {               
                items: [                  
                    {
                        label: 'Informacion', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['dashboard'],
                        isEvent:true                                                 
                    },
                    {
                        label: 'Stands', 
                        icon: 'pi pi-fw pi-plus',
                        badgeClass: 'p-badge-success',
                        items: [
                            
                        ],
                        isEvent:true
                    },
                    {
                        label: 'Solicitudes', 
                        icon: 'pi pi-fw pi-plus',                                                
                        items: [
                            
                        ],
                        isEvent:true
                    },
                    {
                        label: 'Secciones', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            
                        ],
                        isEvent:true
                    },
                    {
                        label: 'Plano', 
                        icon: 'pi pi-fw pi-plus',                                               
                        items: [
                            
                        ],
                        isEvent:true
                    },
                   
                    {label: 'Configuración', icon: 'pi pi-fw pi-cog',isEvent:true},
                    {
                        label: 'Zonas',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['configuracion/stands'],                    
                        isEvent:true     
                    },
                    {
                        label: 'Servicios',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['configuracion/servicios'],
                        isEvent:true
                    },
                   

                ]
            },            
        ];
    }
}
