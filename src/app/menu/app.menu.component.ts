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
                label: 'Administración', icon: 'pi pi-fw pi-cog',                
                items: [                  
                    {
                        label: 'Nuevo evento', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['dashboard'],                                                 
                    },
                    {
                        label: 'Eventos', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['dashboard'],                                                 
                    },
                    {
                        selector:true
                    }
                ],
            },
            {               
                items: [                  
                    {
                        label: 'Informacion', 
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['dashboard'],                                                 
                    },
                    {
                        label: 'Stands', 
                        icon: 'pi pi-fw pi-calendar',                        
                        badgeClass: 'p-badge-success',
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Solicitudes', 
                        icon: 'pi pi-fw pi-bell',                                                
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Secciones', 
                        icon: 'pi pi-fw pi-table',                                                
                        items: [
                            
                        ]
                    },
                    {
                        label: 'Plano', 
                        icon: 'pi pi-fw pi-map',                                                
                        items: [
                            
                        ]
                    },
                    //{
                    //    label: 'Eventos', 
                    //    icon: 'pi pi-fw pi-money-bill',                        
                    //    badgeClass: 'p-badge-success',
                    //    items: [
                    //        {
                    //            label: 'Sala de Eventos',
                    //            icon: 'pi pi-fw pi-plus',
                    //            routerLink: ['eventos/rooms'],                         
                    //        },
                    //    ]
                    //},
                    //{
                    //    label: 'Comercial', 
                    //    icon: 'pi pi-fw pi-calendar',                                                                        
                    //    badgeClass: 'p-badge-success',
                    //    items: [
                    //        {
                    //            label: 'Expo',
                    //            icon: 'pi pi-fw pi-plus',
                    //            routerLink: ['comercial/expo'],                         
                    //        },
                    //    ]
                    //},
                    {
                        label: 'Configuración', 
                        icon: 'pi pi-fw pi-cog',                                                
                        badgeClass: 'p-badge-success',
                        items: [
                            {
                                label: 'Sona de Stands',
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

                ]
            },            
        ];
    }
}
