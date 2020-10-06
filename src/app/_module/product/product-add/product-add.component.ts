import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';
import { Select2Plugin } from "select2";
import { Product } from 'src/app/_model/product.model';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  select2plugin: Select2Plugin;
  product: Product;
  productInputForm : FormGroup;
  categories : string[];

  // constructor() { }
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    bsCustomFileInput.init();
    $(".select2").select2();
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    });

    this.categories = ['Grocery', 'Kitchen', 'Oil', 'Spices'];

    this.createProductInputForm();

  }

  createProductInputForm() : void{
    this.productInputForm = this.formBuilder.group({
      name: "",
      image: "",
      categories: "",
      buyingPricePerUnit: "",
      sellingPricePerUnit: "",
      quantity: ""
    });

  }

  addProduct(){
    console.log("Product Form");
    console.log(this.productInputForm.value);

    console.log("Product");
    this.product = this.productInputForm.value;
    console.log(this.product);
    console.log($(".select2").select2().toArray);
  }

}
