import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetworkcallingService } from "src/app/_services/networkcalling.service";
import { Loginresponse } from "src/app/_model/loginresponse.model";
import { AppStorageService } from "src/app/_services/app-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mainTitle = "Business Name";
  username: string;
  password: string;
  loginResponse: Loginresponse;

  constructor( 
    private netWorkingCalling : NetworkcallingService, 
    private appStorage: AppStorageService,
    private router: Router ) { }

  ngOnInit(): void {
    if(this.appStorage.getToken()){
      this.router.navigate(['/dashboard']);
    }
  }

  loginAttempt(){
    this.netWorkingCalling.loaginRequest(this.username, this.password).subscribe( 
      data => {
        this.appStorage.storeToken(data.jwt);
        this.appStorage.storeUser(data.user);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log("Login Failed");
        console.log(err);
      }
    );
  }

}
