import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config, Observable, throwError } from 'rxjs';
import { Loginresponse } from '../_model/loginresponse.model';
import { AppStorageService } from './app-storage.service';
import { FormGroup } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const BASE_URL = "http://127.0.0.1:8080/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class NetworkcallingService {
  
  constructor(private http : HttpClient, private appStorage: AppStorageService) { }

  prepareRequestbody(formGroup: FormGroup){
    const formData = new FormData();
    for ( var key in formGroup.value ) {
      formData.append(key, formGroup.value[key]);
    }
    return formData;
  }


  getCommonHeader(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization','Bearer '+this.appStorage.getToken());
    return headers;
  }

  getMultipartHeader(){
    let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Content-Type', 'multipart/form-data');
    headers = headers.set('Authorization','Bearer '+this.appStorage.getToken());
    headers = headers.set("Access-Control-Allow-Origin", "*");
    headers = headers.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    headers = headers.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    return headers;
  }

  loaginRequest(username : string, password : string) : Observable<any>{
    let headers = this.getCommonHeader();
    return this.http.post(BASE_URL+"authenticate", {username, password}, httpOptions);
  }

  registrationRequest(registrationForm: any) : Observable<any>{
    let headers = this.getCommonHeader();
    return this.http.post(BASE_URL+"registration", registrationForm, {headers});
  }

  getProductList() : Observable<any>{  
    let headers = this.getCommonHeader();
    return this.http.get(BASE_URL+"product/list", {headers});
  }

  addProductRequest(body: any) : Observable<any>{
    let headers = this.getMultipartHeader();
    return this.http.post(BASE_URL+"product/create", body, {headers});
  }

  addCompanyRequest(body: any) : Observable<any>{
    let headers = this.getMultipartHeader();
    return this.http.post(BASE_URL+"company/create", body, {headers});
  }

  getCompanyList() : Observable<any> {
    let headers = this.getCommonHeader();
    return this.http.get(BASE_URL+"company/list", {headers});
  }

  updateCompanyRequest(body: any) : Observable<any>{
    let headers = this.getMultipartHeader();
    return this.http.post(BASE_URL+"company/update", body, {headers});
  }

  deleteCompanyRequest(id: number) : Observable<any>{
    let headers = this.getMultipartHeader();
    return this.http.delete(BASE_URL+"company/"+id, {headers});
  }
}
