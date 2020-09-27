import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorageService } from 'src/app/_services/app-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  fullName: string = "";

  constructor( private appStorage: AppStorageService, private router: Router) { }

  ngOnInit(): void {
    this.fullName = this.appStorage.getUser().name;
  }
  
  logout(){
    alert("CLICKED");
    this.appStorage.storeClearAll();
    this.router.navigate(['/login']);
  }

}
