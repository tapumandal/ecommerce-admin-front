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

  inputFormGroup : FormGroup;
  select2plugin: Select2Plugin;
  categoryOptions : string[];

  tmpFile: File[];
  
  constructor(private formBuilder : FormBuilder, private networkCalling: NetworkcallingService) { }

  ngOnInit(): void {
    
    this.inputFormGroup = this.formBuilder.group(new Product());

    bsCustomFileInput.init();
    $('.categorySelect').select2({
      theme: 'bootstrap4'
    });

    this.categoryOptions = ['Grocery', 'Kitchen', 'Oil', 'Spices'];

    
    $(".categorySelect").on("select2:select select2:unselect", function (e) {
      var items= $(this).val();
      selectedCategories = items.toLocaleString().valueOf().trim();
    })

  }

  productImageUploaded(event){
    this.tmpFile = event.target.files;
  }

  addProduct(){

    let formData = new FormData();
    formData = this.networkCalling.prepareRequestbody(this.inputFormGroup);

    if(this.tmpFile){
      let i = 0;
      for(let file of this.tmpFile){
        formData.append("images["+i+"]", file);
        i++;
      }
    }

    console.log("Product Request Body");
    console.log(formData.getAll);
    this.networkCalling.addProductRequest(formData).subscribe(
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
