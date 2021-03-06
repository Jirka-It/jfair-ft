import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {MenuService} from './app.menu.service';
import { PagesComponent } from '../pages/pages.component';
import { CommercialSectionService } from '../pages/comercial/services/commercial-section.service';
import { HttpParams } from '@angular/common/http';

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-menuitem]',
    styles:[`
    span.p-autocomplete{
        height:20px!important;
    }

    `],
    /* tslint:enable:component-selector */
    template: `            
        <ng-container>
            <div *ngIf="root && item.visible !== false">
                <i [class]="item.icon"></i>
                <span class="layout-menuitem-text">
                    {{item.label}}
                </span>
            </div>
            <a [attr.href]="item.url" (click)="itemClick($event)" *ngIf="(!item.routerLink || item.items) && item.visible !== false && isSelectEvent()" (keydown.enter)="itemClick($event)"
               [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class" (mouseenter)="onMouseEnter()" pRipple
               [pTooltip]="item.label" [tooltipDisabled]="active || !(root && app.isSlim() && !app.isMobile())">
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{item.label}}</span>
                <span class="p-badge p-component p-badge-no-gutter" [ngClass]="item.badgeClass" *ngIf="item.badge && !root">{{item.badge}}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <a *ngIf="!isSelectEvent()"></a>
            <a  (click)="itemClick($event)" *ngIf="(item.routerLink && !item.items) && item.visible !== false && ( item.admin || isSelectEvent())"
               [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink" [routerLinkActiveOptions]="{exact: true}"
               [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class" (mouseenter)="onMouseEnter()" pRipple
               [pTooltip]="item.label" [tooltipDisabled]="active || !(root && app.isSlim() && !app.isMobile())">
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{item.label}}</span>
                <span class="p-badge p-component p-badge-no-gutter" [ngClass]="item.badgeClass" *ngIf="item.badge && !root">{{item.badge}}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <ul *ngIf="((item.items && root) || (item.items && active)) && item.visible !== false" [@children]="root ? 'visible' : active ? 'visibleAnimated' : 'hiddenAnimated'">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li *ngIf="!child.selector" app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
                    <span id="Selector" class="mt-5 p-float-label" *ngIf="child.selector">
                        <p-autoComplete 
                                [(ngModel)]="selectEvent"                                    
                                [suggestions]="eventsFiltereds" styleClass="w-full"
                                (completeMethod)="filterEvents($event)" field="name" [dropdown]="true">
                        </p-autoComplete>
                        <label>Selecciona un evento</label>
                    </span>
                                        
                </ng-template>
            </ul>            
        </ng-container>
        
    `,
    host: {
        '[class.layout-root-menuitem]': 'root || active',
        '[class.active-menuitem]': '(active)'
    },
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px',
                padding: '0px'
            })),
            state('hiddenAnimated', style({
                height: '0px',
                padding: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*'
            })),
            state('hidden', style({
                height: '0px',
                padding: '0px'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {

    @Input() item: any;

    @Input() index: number;

    @Input() root: boolean;

    @Input() parentKey: string;

    @Output() eventSelected = new EventEmitter();

    active = false;

    
    menuSourceSubscription: Subscription;
    
    menuResetSubscription: Subscription;
    
    key: string;
    
    events:any[] = [{name:'expo-cotelco'},{name:'Outfist place'},{name:'remarked'}];
    selectEvent:string;
    eventsFiltereds:any[] = [];

    constructor(private _eventsService: CommercialSectionService,public app: PagesComponent, public router: Router, private cd: ChangeDetectorRef, private menuService: MenuService) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(params => {
                if (this.app.isHorizontal() || this.app.isSlim()) {
                    this.active = false;
                } else {
                    if (this.item.routerLink) {
                        this.updateActiveStateFromRoute();
                    } else {
                        this.active = false;
                    }
                }
            });
    }

    ngOnInit() { //conflicts
        this.loadEvents();
        if (!(this.app.isHorizontal() || this.app.isSlim()) && this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }

        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }

    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
    }
    loadEvents(){
        let param = new HttpParams;
        param = param.append('state', String(1));  
        
        this._eventsService.seach(param).subscribe(data => { 
         this.events = data.content;                      
        });  
    }
    isEventSelected(){
        this.eventSelected.emit(true);
    }
    filterEvents(event){
        console.log(event)
        if(event){
            this.eventsFiltereds = this.events.filter(filt => filt.name.indexOf(event.query.toLowerCase()) >= 0 );
            if(this.selectEvent['id']){
                localStorage.setItem('eventSelect',JSON.stringify(this.selectEvent));
            }
            console.log(this.selectEvent['id']);
        }
    }

    isSelectEvent(){
        return localStorage.getItem('eventSelect') ? true:false;
    }

    itemClick(event: Event) {
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        // navigate with hover in horizontal mode
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }

        // notify other items
        this.menuService.onMenuStateChange(this.key);

        // execute command
        if (this.item.command) {
            this.item.command({originalEvent: event, item: this.item});
        }

        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        } else {
            // activate item
            this.active = true;

            // reset horizontal and slim menu
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.menuService.reset();
                this.app.menuHoverActive = false;
            }

            if (!this.app.isStatic()) {
                this.app.menuActive = false;
            }

            this.app.mobileMenuActive = false;
        }

        this.removeActiveInk(event);
    }

    onMouseEnter() {
        // activate item on hover
        if (this.root  && (this.app.isHorizontal() || this.app.isSlim()) && this.app.isDesktop()) {
            if (this.app.menuHoverActive) {
                this.menuService.onMenuStateChange(this.key);
                this.active = true;
            }
        }
    }

    removeActiveInk(event: Event) {
        const currentTarget = (event.currentTarget as HTMLElement);
        setTimeout(() => {
            if (currentTarget) {
                const activeInk = currentTarget.querySelector('.p-ink-active');
                if (activeInk) {
                    if (activeInk.classList) {
                        activeInk.classList.remove('p-ink-active');
                    }
                    else {
                        activeInk.className = activeInk.className.replace(new RegExp('(^|\\b)' + 'p-ink-active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                    }
                }
            }
        }, 401);
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }

        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}
