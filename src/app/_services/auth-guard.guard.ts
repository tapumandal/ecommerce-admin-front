import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private appStorage: AppStorageService){}
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(this.appStorage.getToken()){
      return true;
    }
    
    this.router.navigate(['login']);
    return false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
