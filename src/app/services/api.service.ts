import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LOCAL_DATA from './local-data';

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


  
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private localData = LOCAL_DATA;  
  
  constructor(private _http:HttpClient){}

  getRefreshToken() {
    return localStorage.getItem(this.localData.refresh_token);
  }

  getToken() {
    const token = localStorage.getItem(this.localData.access_token);
    console.log(token);
    return token;
  }

  getTokenType() {
    return localStorage.getItem(this.localData.token_type);
  }


  
}