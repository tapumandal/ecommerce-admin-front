import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from 'bs-custom-file-input';
import { Select2Plugin } from "select2";
import { Product } from 'src/app/_model/product.model';
import { FormGroup, FormBuilder } from "@angular/forms";
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';
import { ErrorManagementService } from 'src/app/_services/error-management.service';

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
  companies : string[];
  tmpFile: File[];
  
  constructor(private formBuilder : FormBuilder, private networkCalling: NetworkcallingService, private errorManagement: ErrorManagementService) { }

  ngOnInit(): void {
    
    this.companies = [];
    this.categoryOptions = [];

    this.inputFormGroup = this.formBuilder.group(new Product());

    bsCustomFileInput.init();
    $('.categorySelect').select2({
      theme: 'bootstrap4'
    });

    

    
    $(".categorySelect").on("select2:select select2:unselect", function (e) {
      var items= $(this).val();
      selectedCategories = items.toLocaleString().valueOf().trim();
    })

    this.loadCompanyList();
    this.loadCategoryList();

  }

  productImageUploaded(event){
    this.tmpFile = event.target.files;
  }

  addProduct(){
    this.inputFormGroup.controls.categories.setValue(selectedCategories);

    let formData = new FormData();
    formData = this.networkCalling.prepareRequestbody(this.inputFormGroup);

    if(this.tmpFile){
      let i = 0;
      for(let file of this.tmpFile){
        formData.append("images["+i+"]", file);
        i++;
      }
    }

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

  loadCompanyList(){
    this.networkCalling.getCompanyList().subscribe(
      data => {
        data.data.forEach(element => {
          this.companies.push(element.name);
        });

      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  loadCategoryList(){
    this.networkCalling.getCategoryList().subscribe(
      data => {
        data.data.forEach(element => {
          this.categoryOptions.push(element.name);
        });
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

}
