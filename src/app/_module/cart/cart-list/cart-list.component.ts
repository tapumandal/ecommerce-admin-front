import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';
import { Cart } from 'src/app/_model/cart.model';
import { Pagination } from 'src/app/_model/pagination.model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts: Cart[];
  pagination: Pagination;
  collection: number[];

  constructor(private networkCalling : NetworkcallingService, private errorManagement : ErrorManagementService) { }

  ngOnInit(): void {
    this.loadCartList();

    // for(let i=1; i<=this.pagination.pageSize; i++){
    //   let Obj = {'page': `${i}`,'size': `20`};
    //   this.collection.push(Obj);
    // }
  }

  loadCartList() {
    this.networkCalling.getCartList().subscribe(
      data => {
        this.carts = data.data;
        this.pagination = data.myPagenation;
        console.log(this.pagination);
        this.collection = Array(this.pagination.totalElement).fill(this.pagination.totalElement).map((x,i)=>i+1);
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

}
