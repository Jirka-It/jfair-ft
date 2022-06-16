import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams, HttpErrorResponse }from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import {of} from "rxjs/observable/of";
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn:'root'
})
export class EventService 
{
  private server: string = environment.API_URL;

  private services = 
  {
    events:this.server+'/events',//'/events',
    eventsListInscription:this.server+'/events-inscriptions/lists'//'/events'
  };

  httpOpts: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':'application/json', Authorization: `Bearer ${this._authService.getToken()}` })};

  constructor (private http: HttpClient,private _authService:AuthenticationService) {}

  public getAll(): Observable<any> 
  {
    return this.http.get(`${this.services.events}`,this.httpOpts)
  }

  public get(id): Observable<any> 
  {
    return this.http.get(`${this.services.events}/${id}`,this.httpOpts)
  }

  public seach(params:HttpParams): Observable<any> 
  {
    return this.http.get(this.services.events+'?'+params.toString(), this.httpOpts);
  }


  public getListInscriptionEvents(params:HttpParams): Observable<any> 
  {
    return this.http.get(this.services.eventsListInscription+'?'+params.toString(), this.httpOpts);
  }

  public store(data)
  {
  	return this.http.post(`${this.services.events}`, data, this.httpOpts)
  }

  update (data, id): Observable<any> 
  {
	  return this.http.put<any>(this.services.events+'/'+id, data, this.httpOpts)

  }

  delete (id: number): Observable<{}> 
  {
	  const url = `${this.services.events}/${id}`;
	  return this.http.delete(url, httpOptions)
  }
}
