import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';



@Injectable({providedIn: 'root'})
export class UsersService
{
  url = environment.API_V1;
  httpOption = { headers: new HttpHeaders({
    'Content-Type': 'application/json',
   // Authorization: `Bearer ${this.authenticationService.getToken()}`
  })};

  constructor(protected httpService: HttpClient,
    private authenticationService: AuthenticationService)
  {}

  public store(formdata: any)
  {
    return this.httpService.post(`${this.url}/users`, formdata,
    this.httpOption).pipe(take(1));
  }

  public update(id: any, dataUpdate: any)
  {
    return this.httpService.put(`${this.url}/users/${id}`,dataUpdate,
     this.httpOption).pipe(take(1));
  }

  public findById(id: any): Observable<any>
  {
    return this.httpService.get(`${this.url}/users/${id}`,
    this.httpOption).pipe(take(1));
  }


  public delete(id: any)
  {
    return this.httpService.delete(`${this.url}/users/${id}`,
    this.httpOption).pipe(take(1));
  }


  public findAll(state:any,searchParam:string,params:HttpParams): Observable<any>
  {
      if(params)
      {
          params = new HttpParams();
      }

      params.set("statesParam",state);

      if(searchParam)
      {
        params.set("searchParam",searchParam);
      }


    return this.httpService.get(this.url+'/users?'+params.toString(),
    this.httpOption).pipe(take(1));
  }
}

