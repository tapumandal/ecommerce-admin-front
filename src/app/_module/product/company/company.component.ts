import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Company } from "src/app/_model/company.model";
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  btnLoadingIcon = false;
  companys: Company[];
  inputFormGroup: FormGroup;
  

  prio=[0,1,2];
  itemListForm:any;

  constructor(private formBuilder: FormBuilder, private networkCalling: NetworkcallingService, private errorManagement: ErrorManagementService) { }

  ngOnInit(): void {
    this.loadEntityList();
    this.inputFormGroup = this.formBuilder.group(new Company());

    this.itemListForm=new FormGroup({
      items:new FormArray([])
    })
  }

  submit(){
    // this.serv.setMyData(this.itemListForm.value.items);
  }

  getMyData(){

    let data = this.companys;

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
    this.networkCalling.getCompanyList().subscribe(
      data => {
        this.companys = data.data;
        console.log("Companys List...")
        console.log(this.companys);
        this.getMyData();
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  updateEntity(i: number){
    console.log(this.itemListForm.get('items').value[i]);

    this.networkCalling.updateCompanyRequest(this.itemListForm.get('items').value[i]).subscribe(
      data => {
        console.log("Update Company Respnse");
        console.log(data.data);
      },
      err => {
        console.log("Update Company Respnse Failed");
        console.log(err);
      }
    );
  }
  
  deleteEntity(i:number){
    console.log(i);
    console.log(this.itemListForm.get('items').value);
    console.log(this.itemListForm.get('items').value[i]);
    console.log(this.itemListForm.get('items').value[i].id);
    this.networkCalling.deleteCompanyRequest(this.itemListForm.get('items').value[i].id).subscribe(
      data => {
        
        this.itemListForm.get('items').removeAt(i);
        console.log("Update Company Respnse");
        console.log(data.data);
      },
      err => {
        console.log("Update Company Respnse Failed");
        console.log(err);
      }
    );
  }

  createEntity(){
    this.btnLoadingIcon = true;

    let formData = new FormData();
    formData = this.networkCalling.prepareRequestbody(this.inputFormGroup);

    this.networkCalling.addCompanyRequest(formData).subscribe(
      data => {
          console.log("Create Company Respnse");
          console.log(data.data);

          let companyTmp = data.data;
          console.log(companyTmp);

          this.itemListForm.get('items').insert(0,new FormGroup({
            id:new FormControl(companyTmp.id,[Validators.required]),
            name:new FormControl(companyTmp.name,[Validators.required]),
            active:new FormControl(companyTmp.active,[Validators.required])
          }));
            

      },
      err => {
        console.log("Create Company Respnse Failed");
        console.log(err);
      }
    );
  }

}
