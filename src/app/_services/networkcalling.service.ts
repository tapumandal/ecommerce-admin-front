import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config, Observable, throwError } from 'rxjs';
import { Loginresponse } from '../_model/loginresponse.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const BASE_URL = "http://127.0.0.1:8080/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class NetworkcallingService {

  constructor(private http : HttpClient) { }


  loaginRequest(username : string, password : string) : Observable<any>{
    return this.http.post(BASE_URL+"authenticate", {username, password}, httpOptions);
  }

  registrationRequest(registrationForm: any) : Observable<any>{
    return this.http.post(BASE_URL+"registration", registrationForm, httpOptions);
  }

}
