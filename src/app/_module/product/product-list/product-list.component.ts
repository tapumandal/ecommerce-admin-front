import { Component, OnInit } from '@angular/core';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { Product } from "src/app/_model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  btnLoadingIcon = false;
  productImage: string;
  constructor(private networkCalling : NetworkcallingService, private errorManagement : ErrorManagementService) { }

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList(){
    this.networkCalling.getProductList().subscribe(
      data => {
        this.products = data.data;
        console.log("Product List...")
        console.log(this.products);
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

}
