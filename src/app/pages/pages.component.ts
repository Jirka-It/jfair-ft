import { Component, OnInit, Renderer2 } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from '../app.component';
import { MenuService } from '../menu/app.menu.service';

@Component({
  selector: 'app-pages',
  templateUrl:'./pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  topbarMenuActive: boolean;
  menuActive: boolean;
  staticMenuDesktopInactive: boolean;
  mobileMenuActive: boolean;
  menuClick: boolean;
  mobileTopbarActive: boolean;
  topbarRightClick: boolean;
  topbarItemClick: boolean;
  activeTopbarItem: string;
  documentClickListener: () => void;
  configActive: boolean;
  configClick: boolean;
  rightMenuActive: boolean;
  menuHoverActive = false;
  searchClick = false;
  search = false;
  currentInlineMenuKey: string;
  inlineMenuActive: any[] = [];
  inlineMenuClick: boolean;

  constructor(public renderer: Renderer2, private menuService: MenuService, private primengConfig: PrimeNGConfig,
    public app: AppComponent) { }

  ngOnInit() {
    this.menuActive = this.isStatic() && !this.isMobile();
  }

  onTopbarMobileButtonClick(event) {
    this.mobileTopbarActive = !this.mobileTopbarActive;
    event.preventDefault();
  }

  onMenuButtonClick(event) {
    this.menuActive = !this.menuActive;
    this.topbarMenuActive = false;
    this.topbarRightClick = true;
    this.menuClick = true;

    if (this.isDesktop()) {
        this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
        this.mobileMenuActive = !this.mobileMenuActive;
        if (this.mobileMenuActive) {
            this.blockBodyScroll();
        } else {
            this.unblockBodyScroll();
        }
    }

    event.preventDefault();
  }

  onMenuClick($event) {
    this.menuClick = true;

    if (this.inlineMenuActive[this.currentInlineMenuKey] && !this.inlineMenuClick) {
        this.inlineMenuActive[this.currentInlineMenuKey] = false;
    }
  }

  onSearchKeydown(event) {
    if (event.keyCode === 27) {
        this.search = false;
    }
  }

  onInlineMenuClick(event, key) {
    if (key !== this.currentInlineMenuKey) {
        this.inlineMenuActive[this.currentInlineMenuKey] = false;
    }

    this.inlineMenuActive[key] = !this.inlineMenuActive[key];
    this.currentInlineMenuKey = key;
    this.inlineMenuClick = true;
  }

  onTopbarItemClick(event, item) {
    console.log('click');
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
        this.activeTopbarItem = null;
    }
    else {
        this.activeTopbarItem = item;
    }

    if (item === 'search') {      
        this.search = !this.search;
        this.searchClick = !this.searchClick;
    }

    event.preventDefault();
  }

  onRightMenuButtonClick(event) {
    this.rightMenuActive = !this.rightMenuActive;
    event.preventDefault();
  }

  isDesktop() {
    return window.innerWidth > 991;
  }
  
  isMobile() {
      return window.innerWidth <= 991;
  }
  
  isOverlay() {
      return this.app.menuMode === 'overlay';
  }
  
  isStatic() {
      return this.app.menuMode === 'static';
  }
  
  isHorizontal() {
      return this.app.menuMode === 'horizontal';
  }
  
  isSlim() {
      return this.app.menuMode === 'slim';
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
        document.body.classList.add('blocked-scroll');
    } else {
        document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
        document.body.classList.remove('blocked-scroll');
    } else {
        document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
            'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

}
