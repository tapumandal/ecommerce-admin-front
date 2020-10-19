import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import bsCustomFileInput from 'bs-custom-file-input';
import { Select2Plugin } from 'select2';
import { Product } from 'src/app/_model/product.model';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

let selectedCategories = "";

@Component({
  selector: 'app-porduct-details',
  templateUrl: './porduct-details.component.html',
  styleUrls: ['./porduct-details.component.css']
})
export class PorductDetailsComponent implements OnInit {

  inputFormGroup : FormGroup;
  select2plugin: Select2Plugin;
  categoryOptions : string[];
  categorySelected : string[];
  companies : string[];
  tmpFile: File[];
  product: Product;
  productId: string;
  
  constructor(private route: ActivatedRoute, private formBuilder : FormBuilder, private networkCalling: NetworkcallingService, private errorManagement: ErrorManagementService) { 
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.product = new Product();
    this.companies = [];
    this.categoryOptions = [];
    this.categorySelected = [];
    this.inputFormGroup = this.formBuilder.group(this.product);

    this.getProductById();

    bsCustomFileInput.init();
    $('.categorySelect').select2({
      theme: 'bootstrap4'
    });
    
    this.product.name = "product Name X";
    this.product.description = "Description X";
    
    $(".categorySelect").on("select2:select select2:unselect", function (e) {
      var items= $(this).val();
      selectedCategories = items.toLocaleString().valueOf().trim();
    });

    this.loadCompanyList();
    this.loadCategoryList();
  }

  productImageUploaded(event){
    this.tmpFile = event.target.files;
  }

  getProductById(){
    this.networkCalling.getProductById(this.productId).subscribe(
      data => {
        this.product = data.data;
        console.log(this.product);
        this.product.image = "";
        let tmpCategories = [];
        tmpCategories = this.product.categories.split(",");
        this.inputFormGroup.patchValue(this.product);

      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
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
