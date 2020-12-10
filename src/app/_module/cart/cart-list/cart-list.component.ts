import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private networkCalling : NetworkcallingService, private errorManagement : ErrorManagementService) { }

  ngOnInit(): void {
    this.loadCartList();
  }

  loadCartList() {
    this.networkCalling.getCartList().subscribe(
      data => {
        console.log(data.data);
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

}
