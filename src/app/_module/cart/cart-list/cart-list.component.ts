import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';
import { Cart } from 'src/app/_model/cart.model';
import { Pagination } from 'src/app/_model/pagination.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts: Cart[];
  pagination: Pagination;
  collection: number[];
  pageNumber: any;
  pageSize: any;
  selectedItem: any;

  constructor(private route: ActivatedRoute, private networkCalling : NetworkcallingService, private errorManagement : ErrorManagementService) { 
    this.pageNumber = this.route.snapshot.paramMap.get('page');
    this.pageSize = this.route.snapshot.paramMap.get('size');
    if(this.pageNumber == null) this.pageNumber = 1;
    if(this.pageSize == null) this.pageSize = 10;

    this.selectedItem = this.pageNumber;
    console.log(this.selectedItem);
  }

  ngOnInit(): void {
    this.loadCartList();

    // for(let i=1; i<=this.pagination.pageSize; i++){
    //   let Obj = {'page': `${i}`,'size': `20`};
    //   this.collection.push(Obj);
    // }
  }

  loadCartList() {
    this.networkCalling.getCartList(this.pageNumber, this.pageSize).subscribe(
      data => {
        this.carts = data.data;
        this.pagination = data.myPagenation;
        console.log(this.pagination);
        this.collection = Array(5).fill(this.pagination.totalElement).map((x,i)=>i+1);
        this.selectedItem = this.pageNumber;
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  paginationBtnClicked($event, numberOfBtn){
    console.log(numberOfBtn);
    console.log($event);
  }

}
