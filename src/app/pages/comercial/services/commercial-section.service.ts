import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class CommercialSectionService {
    private server: string = environment.API_URL;
    private services = { commercials: this.server + '/commercials' };
    httpOpts: any = { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${this._authService.getToken()}`
      })};

    httpImgOpts: any = {       
      headers: new HttpHeaders({        
        'Accept': 'application/json',
        Authorization: `Bearer ${this._authService.getToken()}`
      })};
     
    constructor 
    (
        private _http: HttpClient,
        private _authService:AuthenticationService
    ) {}

    public getAll(): Observable<any>
  {
    return this._http.get(`${this.services.commercials}`, this.httpOpts);
  }

  public find(id: number): Observable<any>
  {
    return this._http.get(`${this.services.commercials}/${id}`, this.httpOpts);
  }

  public seach(params: HttpParams): Observable<any>
  {
    console.log(params)
    return this._http.get(this.services.commercials + '?' + params.toString(), this.httpOpts);
  }
  public store(data)
  {
    return this._http.post(`${this.services.commercials}`, data);
  }

  update (data, id): Observable<any>
  {
    return this._http.put<any>(this.services.commercials + '/' + id, data, this.httpOpts);
  }

  image (data, id): Observable<any>
  {
    return this._http.put<any>(this.services.commercials + '/image/' + id, data,this.httpImgOpts);
  }

  map (data, id): Observable<any> {
    return this._http.put<any>(this.services.commercials + '/map/' + id, data,this.httpImgOpts);
  }

  poster (data, id): Observable<any>
  {            
    return this._http.put<any>(this.services.commercials + '/poster/' + id, data,this.httpImgOpts);
  }

  downloads (id): Observable<any>
  {  
    return this._http.get(this.services.commercials + '/image/' + id, {
      responseType: 'blob'
    });
  }

        
}