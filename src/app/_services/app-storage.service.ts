import { Injectable } from '@angular/core';
import { User } from '../_model/user.model';

const AUTH_TOKEN = "auth-token";
const LOGGED_USER = "user-data";

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

  storeUser(user: User): void {
    localStorage.removeItem(LOGGED_USER);
    localStorage.setItem(LOGGED_USER, JSON.stringify(user));
  }

  getToken(): string {
    return localStorage.getItem(AUTH_TOKEN);
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(LOGGED_USER));
  }

  storeClearAll(){
    localStorage.clear();
  }

}
