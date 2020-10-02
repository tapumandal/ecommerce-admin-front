import { Component, OnInit } from '@angular/core';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private networkCalling : NetworkcallingService) { }

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList(){
    this.networkCalling.getProductList().subscribe(
      data => {
        console.log("Response Success");
        console.log(data);
      },
      err => {
        console.log("Response Faield");
        console.log(err);
        console.log("Response Faield Specific");
        console.log(err.message.error);
      }
    )
  }

}
