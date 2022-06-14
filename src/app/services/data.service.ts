import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import LOCAL_DATA from './local-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private server: string = environment.API_URL; //This variables is from enviroment.ts
  private services = { countAnalytic:`${this.server}dashboards` };   
  constructor(
    private _http:HttpClient,
    private _appService:ApiService) {} 

  getAnalyticCount(){
    const header =
    {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this._appService.getToken()}`
      ),
    };
    console.log(header);
    return this._http.get(this.services.countAnalytic,header);    
  }
  
}