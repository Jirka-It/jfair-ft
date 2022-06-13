import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';

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
                    {label: 'Dashboard Sales', icon: 'pi pi-fw pi-home', routerLink: ['analytics/demo/dashboard'], badge: '4', badgeClass: 'p-badge-info'},
                    {label: 'Dashboard Analytics', icon: 'pi pi-fw pi-home',
                        routerLink: ['analytics/demo/dashboardanalytics'], badge: '2', badgeClass: 'p-badge-success'}
                ]
            },
            {
                label: 'Maestros', icon: 'pi pi-fw pi-star', routerLink: ['analytics/master'],
                items: [
                    {label: 'Usuarios', icon: 'pi pi-user', routerLink: ['analytics/master/users']},
                    {label: 'Clientes', icon: 'pi pi-shopping-bag', routerLink: ['analytics/master/customers']},
                  
                ]
            },
            {
                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['analytics/demo/demo/uikit'],
                items: [
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['analytics/demo/uikit/input'], badge: '6', badgeClass: 'p-badge-danger'},
                    {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['analytics/demo/uikit/floatlabel']},
                    {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['analytics/demo/uikit/invalidstate']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['analytics/demo/uikit/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['analytics/demo/uikit/table'], badge: '6', badgeClass: 'p-badge-help'},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['analytics/demo/uikit/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['analytics/demo/uikit/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['analytics/demo/uikit/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['analytics/demo/uikit/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['analytics/demo/uikit/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['analytics/demo/uikit/menu']},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['analytics/demo/uikit/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['analytics/demo/uikit/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['analytics/demo/uikit/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['analytics/demo/uikit/misc']}
                ]
            },
            {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['analytics/utilities'],
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['analytics/demo/uikit/formlayout'], badge: '6', badgeClass: 'p-badge-warning'},
                    {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['analytics/demo/utilities/display']},
                    {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['analytics/demo/utilities/elevation']},
                    {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['analytics/demo/utilities/flexbox']},
                    {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['analytics/demo/utilities/icons']},
                    {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['analytics/demo/utilities/text']},
                    {label: 'Widgets', icon: 'pi pi-fw pi-star', routerLink: ['analytics/demo/utilities/widgets']},
                    {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['analytics/demo/utilities/grid']},
                    {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['analytics/demo/utilities/spacing']},
                    {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['analytics/demo/utilities/typography']}
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['analytics/demo/pages'],
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['analytics/demo/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['analytics/demo/pages/calendar']},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['analytics/demo/pages/timeline']},
                    {label: 'Wizard', icon: 'pi pi-fw pi-star', routerLink: ['analytics/demo/pages/wizard']},
                    {
                        label: 'Landing', icon: 'pi pi-fw pi-globe', badge: '2', badgeClass: 'p-badge-warning',
                        items: [
                            {label: 'Static', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
                            {label: 'Component', icon: 'pi pi-fw pi-globe', routerLink: ['analytics/demo/landing']}
                        ]
                    },
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['analytics/demo/login']},
                    {label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['analytics/demo/pages/invoice']},
                    {label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['analytics/demo/pages/help']},
                    {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['analytics/demo/error']},
                    {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['analytics/demo/notfound']},
                    {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['analytics/demo/access']},
                    {label: 'Contact Us', icon: 'pi pi-fw pi-pencil', routerLink: ['analytics/demo/contactus']},
                    {label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['analytics/demo/pages/empty']}
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Start', icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
                    },
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['analytics/demo/documentation']
                    }
                ]
            }
        ];
    }
}
