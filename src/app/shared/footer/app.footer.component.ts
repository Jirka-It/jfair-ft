import { style } from '@angular/animations';
import {Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div id="Footer" class="section flex align-items-center justify-content-center flex-column layout-menu-light layout-footer lg:flex-row" style="text-align: center;">
             {{'© 2022 Desarrollado por '}}
            <a href="http://www.jirka.co/" title="Ir a Jirka"target="_blank"><b>Jirka</b> </a>
        </div>
    `,
    styles:[`
    #Footer{
        display:flex;
        flex-direction: row;
        justify-content:center;
        width:100%;
        height:37px;
        background-color:#E91E63;
        color:white;            
    }
    #Footer a{
        font-weight: 600;
        text-decoration: none;
        color: white !important;
    }   
    `]
})
export class AppFooterComponent {
    constructor(public app: AppComponent) {}
}
