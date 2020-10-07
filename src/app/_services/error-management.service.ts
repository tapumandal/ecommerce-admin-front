import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorManagementService {

  constructor( private appStorage : AppStorageService, private router: Router) { }

  responseFaield(error: any){
      console.log(error);
      if(error.status == 403){
        // Not Authorized
        this.notAuthorized();
      }
  }

  notAuthorized(){
    this.appStorage.storeClearAll();
    this.router.navigate(["login"]);
  }

}
