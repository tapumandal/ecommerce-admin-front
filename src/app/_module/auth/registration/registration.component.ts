import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user.model';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  mainTitle = "Business Name";
  user: User = new User();

  registrationFrom: any = {};


  constructor(private networkCalling: NetworkcallingService) { }

  ngOnInit(): void {
  }

  registrationAttempt(){
    console.log(this.registrationFrom);
    this.networkCalling.registrationRequest(this.registrationFrom).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }
}
