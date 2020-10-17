import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Category } from "src/app/_model/category.model";
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  btnLoadingIcon = false;
  categorys: Category[];
  inputFormGroup: FormGroup;
  

  prio=[0,1,2];
  itemListForm:any;

  constructor(private formBuilder: FormBuilder, private networkCalling: NetworkcallingService, private errorManagement: ErrorManagementService) { }

  ngOnInit(): void {
    this.loadEntityList();
    this.inputFormGroup = this.formBuilder.group(new Category());

    this.itemListForm=new FormGroup({
      items:new FormArray([])
    })
  }

  submit(){
    // this.serv.setMyData(this.itemListForm.value.items);
  }

  getMyData(){

    let data = this.categorys;

    if(data.length > 0){
      for(let x in data){
        this.itemListForm.get('items').push(new FormGroup({
          id:new FormControl(data[x].id,[Validators.required]),
          name:new FormControl(data[x].name,[Validators.required]),
          active:new FormControl(data[x].active,[Validators.required])
        }))
      }
    }
  }


  track(item:any,index:number){
    return index;
  }

  loadEntityList(){
    this.networkCalling.getCategoryList().subscribe(
      data => {
        this.categorys = data.data;
        console.log("Categorys List...")
        console.log(this.categorys);
        this.getMyData();
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  updateEntity(i: number){
    console.log(this.itemListForm.get('items').value[i]);

    this.networkCalling.updateCategoryRequest(this.itemListForm.get('items').value[i]).subscribe(
      data => {
        console.log("Update Category Respnse");
        console.log(data.data);
      },
      err => {
        console.log("Update Category Respnse Failed");
        console.log(err);
      }
    );
  }
  
  deleteEntity(i:number){
    console.log(i);
    console.log(this.itemListForm.get('items').value);
    console.log(this.itemListForm.get('items').value[i]);
    console.log(this.itemListForm.get('items').value[i].id);
    this.networkCalling.deleteCategoryRequest(this.itemListForm.get('items').value[i].id).subscribe(
      data => {
        
        this.itemListForm.get('items').removeAt(i);
        console.log("Update Category Respnse");
        console.log(data.data);
      },
      err => {
        console.log("Update Category Respnse Failed");
        console.log(err);
      }
    );
  }

  createEntity(){
    this.btnLoadingIcon = true;

    let formData = new FormData();
    formData = this.networkCalling.prepareRequestbody(this.inputFormGroup);

    this.networkCalling.addCategoryRequest(formData).subscribe(
      data => {
          console.log("Create Category Respnse");
          console.log(data.data);

          let categoryTmp = data.data;
          console.log(categoryTmp);

          this.itemListForm.get('items').insert(0,new FormGroup({
            id:new FormControl(categoryTmp.id,[Validators.required]),
            name:new FormControl(categoryTmp.name,[Validators.required]),
            active:new FormControl(categoryTmp.active,[Validators.required])
          }));
          
          this.btnLoadingIcon = false;

      },
      err => {
        console.log("Create Category Respnse Failed");
        console.log(err);
      }
    );
  }

}
