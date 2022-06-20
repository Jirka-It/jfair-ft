import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[ToastrService]
})
export class LoginComponent implements OnInit
{
  lang: string = "es";
  public loading:boolean = false;
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
      private _toastr: ToastrService,
      public translate: TranslateService)
    {
    //Traductor
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    let lang = browserLang.match(/es|fr/) ? browserLang : 'en';
    this.changeLang(lang);
  
    //FormGroup
    this.formGroup = this._formBuilder.group({
      'username':['',[
        Validators.required,
        Validators.email]
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
    this.loading = true;

    if(!this.formGroup.invalid){   
      this.modalDisplay = false;
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
            this.disableF();
            this.loading = false;  
            this._toastr.error(this._erroHandler.handleErrorAuth(403,error.name,error.error['error'])['message'],'Error al iniciar la session');                        
          })         
        },
        err => {           
          this.disableF();
          this.loading =false;
          this._toastr.error(this._erroHandler.handleErrorAuth(err.status,err.name,err.error['error'])['message'],'Error al enviar la peticion',);          
        },
        ()=>{
          this.disableF();
          this.loading = false; 
          console.log('Completando servicios');
          this.routes.navigate(['dashboard']);
        }
      );
    }else{   
      this.isFormEmpy();      
    }

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

  isFormEmpy(){
    if(this.getUsername().valid){
      this._toastr.warning(this._erroHandler.handleErrorAuth(-1,'invalid','Invalid form')['message'],'Error en el Formulario');             
    }else{
      this._toastr.warning('Debe ingresar un correo valido','Error en el Formulario');             
    }
    this.loading = false;
  }


}
