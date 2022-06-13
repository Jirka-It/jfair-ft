import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
  lang: string = "en";

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    let lang = browserLang.match(/es|fr/) ? browserLang : 'en';
    this.changeLang(lang);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
