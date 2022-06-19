import { style } from '@angular/animations';
import {Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div id="Footer" class="section flex align-items-center justify-content-center flex-column layout-menu-light layout-footer lg:flex-row" style="text-align: center;">
            © 2022 Desarrollado por
            <a href="http://www.jirka.co/" title="Ir a Jirka" style="color: #398bf7;"target="_blank"><b>Jirka</b> </a>
        </div>
    `,
    styles:[`
    #Footer{
        width:100%;
        height:27px;
        background-color:#E91E63;
        color:white;       
    }
    `]
})
export class AppFooterComponent {
    constructor(public app: AppComponent) {}
}
