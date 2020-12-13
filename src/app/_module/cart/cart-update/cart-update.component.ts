import { Component, OnInit } from '@angular/core';
import { AppStorageService } from 'src/app/_services/app-storage.service';

@Component({
  selector: 'app-cart-update',
  templateUrl: './cart-update.component.html',
  styleUrls: ['./cart-update.component.css']
})
export class CartUpdateComponent implements OnInit {

  constructor(private storage: AppStorageService) { }

  ngOnInit(): void {
    console.log(this.storage.getDetailsObject());
  }

}
