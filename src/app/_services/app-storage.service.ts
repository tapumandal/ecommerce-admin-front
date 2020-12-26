import { Injectable } from '@angular/core';
import { Cart } from '../_model/cart.model';
import { User } from '../_model/user.model';

const AUTH_TOKEN = "auth-token";
const LOGGED_USER = "user-data";
const DETAILS_OBJECT = "details-object";

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor() {
    
   }

  storeToken(token: string): void {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.setItem(AUTH_TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(AUTH_TOKEN);
  }

  storeUser(user: User): void {
    localStorage.removeItem(LOGGED_USER);
    localStorage.setItem(LOGGED_USER, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(LOGGED_USER));
  }

  storeDetailsObject(objetc: any): void {
    localStorage.removeItem(DETAILS_OBJECT);
    localStorage.setItem(DETAILS_OBJECT, JSON.stringify(objetc));
  }

  getDetailsObject(): Cart {
    return JSON.parse(localStorage.getItem(DETAILS_OBJECT));
  }



  storeClearAll(){
    localStorage.clear();
  }

}
