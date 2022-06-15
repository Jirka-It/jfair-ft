import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  lang: string = "en";
  public loading:number = 0;
  public disabledField:boolean = false;
  public formGroup:FormGroup;

  public modalDisplay:boolean = false;
  public modalError = {
    message: '',
    header:'',
    detail:''
  };
  constructor(
      private routes: Router,
      private _formBuilder:FormBuilder,
      private _auth:AuthenticationService,
      private _erroHandler:ErrorHandlerService,
      public translate: TranslateService)
    {
    //Traductor
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    let lang = browserLang.match(/es|fr/) ? browserLang : 'en';
    this.changeLang(lang);
  
    //FormGroup
    this.formGroup = this._formBuilder.group({
      'username':['',
        Validators.required,
      ],
      'password':['',
        Validators.required,
      ]
    })

  }
  ngOnInit(): void {
    localStorage.removeItem('username');
    if(this.getUsername().value.length > 0){
      console.log('usuario pegado');
    }
  }

  getUsername(){
    return this.formGroup.controls['username'];
  }
  getPassword(){
    return this.formGroup.controls['password'];
  }

  changeLang(lang: string)
  {
    this.translate.use(lang);
  }

 

  public login()
  {
    this.modalDisplay = false;
    if(!this.formGroup.invalid){
      this.disableF();
      this._auth.sigIn({
        username:this.getUsername()['value'],//'444444sistema@inverfas.com.co',
        password:this.getPassword()['value'],//'111749284',
        grant_type:'password',
        scope:'read'
      }).subscribe( 
        (resp:any) => {  
          console.log(resp)              
          localStorage.setItem('username', 'admin');
          this._auth.setCurrentUser(resp);
          this._auth.saveToken(resp); 
          this._auth.me().subscribe((data: any) => {           
            this._auth.setCurrentUser(data);           
          }, error => {
            console.log('error en me')
           
          })         
        },
        err => { 
          console.log(err)                     
          this.modalError = this._erroHandler.handleErrorAuth(err.status,err.name,err.error['error']);
          this.modalDisplay = true;
          this.disableF();
        },
        ()=>{
          this.disableF();
          console.log('Completando servicios');
          this.routes.navigate(['dashboard']);
        }
      );
    }
    /*
    const intervalo$ = new Observable( subs => 
      {
        const interval = setInterval(
          () => console.log('viajando data'),
          1000
        );
        return () => clearInterval(interval);
      })
    let subj$:Subject<any> = new Subject();
    const intervalSubj = intervalo$.subscribe(subj$);

    setTimeout(()=>{
      console.log('fin de los datos');
      this.modalDisplay = true;
      subj$.next('end');
      subj$.complete();
      intervalSubj.unsubscribe();
      this.disableF();
    }, 2500)*/
    //        
    //this.routes.navigate(['administration/dashboard']);
    
    
  }

  public disableF(){
    this.disabledField = !this.disabledField;
    if(this.disabledField){
      this.getUsername().disable();
      this.getPassword().disable();
    }else{
      this.getUsername().enable();
      this.getPassword().enable();
    }
  }



}
