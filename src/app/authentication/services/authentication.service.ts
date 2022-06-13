import { Injectable, Output, EventEmitter } from "@angular/core";
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment.prod";
import LOCAL_DATA from "../../services/local-data";

//Content type to request
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
//Token to public APIs
const httpOptionsXToken = new HttpHeaders().set(
  "X-Token",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqaXJrYSIsImlhdCI6MTU2MzI1MzQyMCwiZXhwIjoyNTQxNDc0MjIwLCJhdWQiOiJwb3J0YWxqc2lyYSIsInN1YiI6InVzZXJqc2lyYXMiLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.b5hHxud28FhCqWSKK3Wu5FDZO4jUDQxV2qRd5wk3OAw"
);

const recoverOptionsXToken = new HttpHeaders().set(
  "X-Token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqaXJrYS1wdWJsaWMiLCJuYW1lIjoiQXV0aG9yaXphdGlvbiIsImlhdCI6MTUxNjIzOTAyMn0.pDU-3E-XTKHvtboiUZJ4qE5YLo9w5eZbTOn6-YXjJcI"
);

const basicHeaders = new HttpHeaders()
  .set("Content-type", "application/x-www-form-urlencoded; charset=utf-8")
  .set("Authorization", "Basic " + btoa("my-client:my-secret"));

@Injectable()
export class AuthenticationService
{
  public user: any = null;
  private server: string = environment.API_V1; //This variables is from enviroment.ts
  private services =
  {
    login:`${this.server}signin`
  };

  public currentUser: any; //Variable to actual user logged  
  private localData = LOCAL_DATA;

  @Output() updateUserData = new EventEmitter<any>()
  constructor(private http: HttpClient, private router: Router) { }

  /***********************BASIC FUNCTIONS to LOGIN***************************** */

  public loginJsugad (data){    
    return this.http.post(this.services.login,data)
  }
  /***********************BASIC FUNCTIONS to LOGIN***************************** */


  /*********************************************FAMOUS SERVICE ME, TO GET MORE INFORMATION FRON AFFILIATE********************************* */

  

  /*********************************************FAMOUS SERVICE ME, TO GET MORE INFORMATION FRON AFFILIATE********************************* */

  /************************************************FUNCTIONS TO LOCAL STORAGE******************************* */

  setCurrentUser(user: any) {
    this.currentUser = user;

    localStorage.setItem(this.localData.access_token,user.bearerToken);
    localStorage.setItem('username', 'admin');
    //localStorage.setItem( this.localData.access_token, btoa(user.bearerToken);
    localStorage.setItem(
      this.localData.currentUser,
      btoa(JSON.stringify(user))
    );
    this.updateUserData.emit(user)
    localStorage.setItem(this.localData.language, "es");
  }

  getCurrentUser() {
    try {
      return JSON.parse(atob(localStorage.getItem(this.localData.currentUser) || '{}'))
    } catch (error) {
      return null;
     }
  }

  saveToken(token: any) {
    // This token is important to APIs with authentication
    localStorage.setItem(this.localData.access_token, token);
  }

  setAffiliate(affiliate: any) {
    localStorage.setItem(
      this.localData.affiliate,
      btoa(JSON.stringify(affiliate))
    );
  }

  setAdditionalInfo(affiliate: any) {
    localStorage.setItem(
      this.localData.additionalInfo,
      btoa(JSON.stringify(affiliate))
    );
  }

  getAffiliate() {
    try {
      return JSON.parse(atob(localStorage.getItem(this.localData.affiliate) || '{}'));
    } catch (error) {
      return null;
    }
  }

  
  isAuthenticated(): boolean {
    return localStorage.getItem(this.localData.access_token) != null
      ? true
      : false;
  }

  getRememberEmail() {
    return localStorage.getItem(this.localData.email);
  }

  getRememberPassword()
  {
    return localStorage.getItem(this.localData.password);
  }

  getRemember(): boolean
  {
    return localStorage.getItem(this.localData.rebember_value) === "true"
      ? true
      : false;
  }

  setRemember(username: string, password: string, remember: boolean)
  {
    if (remember)
    {
      localStorage.setItem(this.localData.rebember_value, "true");
      localStorage.setItem(this.localData.email, username);
      localStorage.setItem(this.localData.password, password);
    }
    else
    {
      localStorage.removeItem(this.localData.rebember_value);
      localStorage.removeItem(this.localData.email);
      localStorage.removeItem(this.localData.password);
    }
  }

  getCurrentPermissions()
  {
    try {
      return (
        JSON.parse(atob(localStorage.getItem(this.localData.currentUser) || '{}'))
          .permissions || []
      );
    } catch (error) {
      console.log(error);
      this.logOut();
    }
  }

  logoutApi(data:any) {
    const header = {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${localStorage.getItem(this.localData.access_token)}`
      ),
    };

    return this.http.put(this.services.login + '/signout', data, header);
  }

  /****************FUNCTIONS TO LOCAL STORAGE******************************* */

  logOut() {
    localStorage.removeItem(this.localData.access_token);
    localStorage.removeItem(this.localData.expire_date);
    localStorage.removeItem(this.localData.token_type);
    localStorage.removeItem(this.localData.lang);
    localStorage.removeItem(this.localData.refresh_token);
    localStorage.removeItem(this.localData.currentUser);
    localStorage.removeItem(this.localData.additionalInfo);
    localStorage.removeItem('username');
    this.router.navigate(["/"]);
  }


  logOutWithOutRedirect() {
    localStorage.removeItem(this.localData.access_token);
    localStorage.removeItem(this.localData.expire_date);
    localStorage.removeItem(this.localData.token_type);
    localStorage.removeItem(this.localData.lang);
    localStorage.removeItem(this.localData.refresh_token);
    localStorage.removeItem(this.localData.currentUser);
    localStorage.removeItem(this.localData.additionalInfo);
  }

  /********************************************OTHER FUNCTIONS ***************************************************** */

  resetPassword(data: any) {
    return this.http.post(this.server + "/public/api/v1/recover-password", data, {
      headers: recoverOptionsXToken,
    });
  }

  public byUserName(username: any): Observable<any> {
    return this.http.get(`${this.server}/public/api/v1/recover-password/search-username/${username}`, {
      headers: recoverOptionsXToken,
    });
  }

  changePassword(data: any, userId: any) {
    return this.http.post(
      this.server + "/users/changepassword/" + userId,
      data
    );
  }



  getUserExist(params: HttpParams) {
    //return this.http.get(this.url);
    return this.http.get(
      this.server + "/public/users" + "?" + params.toString(),
      httpOptions
    );
  }

}
