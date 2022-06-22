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
                label: 'Administración', icon: 'pi pi-fw pi-cog',                
                items: [                  
                    {
                        label: 'Nuevo evento', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['eventos/new'],
                    },
                    {
                        label: 'Eventos', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['eventos/new'],
                                                                         
                    },
                    {
                        selector:true
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
                    },
                    {
                        label: 'Stands', 
                        icon: 'pi pi-fw pi-plus',
                        badgeClass: 'p-badge-success',
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Solicitudes', 
                        icon: 'pi pi-fw pi-plus',                                                
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Secciones', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Plano', 
                        icon: 'pi pi-fw pi-plus',                                               
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Eventos', 
                        icon: 'pi pi-fw pi-money-bill',                        
                        badgeClass: 'p-badge-success',
                        items: [
                            {
                                label: 'Zonas',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['eventos/rooms'],                         
                            },
                        ]
                    },
                    {
                        label: 'Comercial', 
                        icon: 'pi pi-fw pi-calendar',                                                                        
                        badgeClass: 'p-badge-success',
                        items: [
                            {
                                label: 'Expo',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['comercial/expo'],                         
                            },
                        ]
                    },
                    {label: 'Configuración', icon: 'pi pi-fw pi-cog',},
                    {
                        label: 'Zonas',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['configuracion/stands'],                         
                    },
                    {
                        label: 'Servicios',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['configuracion/servicios'],                         
                    },
                   

                ]
            },            
        ];
    }
}
