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
  currentPageNumber: any;
  totalNumberOfPage: any;
  pageSize: any;

  constructor(private route: ActivatedRoute, private networkCalling : NetworkcallingService, private errorManagement : ErrorManagementService) { 
    this.currentPageNumber = this.route.snapshot.paramMap.get('page');
    this.pageSize = this.route.snapshot.paramMap.get('size');
    if(this.currentPageNumber == null) this.currentPageNumber = 1;
    if(this.pageSize == null) this.pageSize = 10;
  }

  ngOnInit(): void {
    this.loadCartList();

    // for(let i=1; i<=this.pagination.pageSize; i++){
    //   let Obj = {'page': `${i}`,'size': `20`};
    //   this.collection.push(Obj);
    // }
  }

  loadCartList() {
    this.networkCalling.getCartList(this.currentPageNumber, this.pageSize).subscribe(
      data => {
        console.log(this.currentPageNumber+"---"+this.pageSize);
        this.carts = data.data;
        this.pagination = data.myPagenation;
        this.myPagination();
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  myPagination(){
    this.totalNumberOfPage = this.pagination.totalPage;
    console.log(this.pagination);
    let startPage = 0;
    let pageLimit = 5;
    if(pageLimit>this.pagination.totalPage){
      pageLimit = this.pagination.totalPage;
    }
    if(this.currentPageNumber>3){
      startPage = this.currentPageNumber-3;
      if((startPage+pageLimit)>this.pagination.totalPage){
        startPage=this.pagination.totalPage-pageLimit;
      }
    }
    this.collection = Array(pageLimit).fill(this.pagination.totalPage).map((x,i)=>i+startPage+1);
  }

  paginationBtnClicked($event, numberOfBtn){
    if(numberOfBtn != 0 && numberOfBtn <= this.totalNumberOfPage){
      this.currentPageNumber = numberOfBtn;
      this.loadCartList();
    }
  }

}
