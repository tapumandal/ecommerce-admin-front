import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';
import { Select2Plugin } from "select2";
import { Product } from 'src/app/_model/product.model';
import { FormGroup, FormBuilder } from "@angular/forms";
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

let selectedCategories = "";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  select2plugin: Select2Plugin;
  product: Product;
  productInputForm : FormGroup;
  categoryOptions : string[];
  
  constructor(private formBuilder : FormBuilder, private networkcalling: NetworkcallingService) { }

  ngOnInit(): void {
    bsCustomFileInput.init();
    $('.categorySelect').select2({
      theme: 'bootstrap4'
    });

    this.categoryOptions = ['Grocery', 'Kitchen', 'Oil', 'Spices'];

    this.createProductInputForm();
    
    $(".categorySelect").on("select2:select select2:unselect", function (e) {
      var items= $(this).val();
      selectedCategories = items.toLocaleString().valueOf().trim();
    })

  }

  createProductInputForm() : void{
    this.productInputForm = this.formBuilder.group({
      name: "",
      image: "",
      categories: "",
      description: "",
      buyingPricePerUnit: "",
      sellingPricePerUnit: "",
      discountPrice: "",
      discountTitle: "",
      unit: "",
      unitTitle: "",
      quantity: "",
    });

  }

  addProduct(){
    this.product = this.productInputForm.value;
    this.product.categories = selectedCategories;
    console.log(this.product);

    this.networkcalling.addProductRequest(this.product).subscribe(
      data => {
          console.log("Product Respnse");
          console.log(data.data);
      },
      err => {
        console.log("Product Respnse Failed");
        console.log(err);
      }
    );
  }

}
