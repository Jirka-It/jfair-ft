import { trigger, transition, style, animate,AnimationEvent } from '@angular/animations';
import { AppComponent } from '../../app.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PagesComponent } from 'src/app/pages/pages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('topbarActionPanelAnimation', [
        transition(':enter', [
            style({opacity: 0, transform: 'scaleY(0.8)'}),
            animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
          ]),
          transition(':leave', [
            animate('.1s linear', style({ opacity: 0 }))
          ])
    ])
  ]
})
export class NavBarComponent implements OnInit {

  constructor(
    public pagesMain: PagesComponent, 
    public app:AppComponent,
    private _routes: Router) { }

  ngOnInit() {
  }

  activeItem: number;  

  @ViewChild('searchInput') searchInputViewChild: ElementRef;
  
  onSearchAnimationEnd(event: AnimationEvent) {
      switch(event.toState) {
          case 'visible':
              this.searchInputViewChild.nativeElement.focus();
          break;
      }
  }
  clearInput(){
      console.log(this.searchInputViewChild);
      this.pagesMain.searchClick = false;
      console.log(this.pagesMain.searchClick);
  }

  logOut(){
    localStorage.clear();
    this._routes.navigate(['/login']);
  }

}
