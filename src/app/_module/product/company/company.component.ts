import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  

  myForm: FormGroup;
  scheduleDetail: FormArray;

  constructor(private formBuilder: FormBuilder, private networkCalling: NetworkcallingService, private errorManagement: ErrorManagementService) { 
    
  }

  ngOnInit(): void {
    this.loadCompanyList();
    this.inputFormGroup = this.formBuilder.group(new Company());

    this.myForm = this.formBuilder.group({
      scheduleDetail: this.formBuilder.array([])
     })
  }



  addRow(){
    // This function instantiates a FormGroup for each day
    // and pushes it to our FormArray

    // We get our FormArray
    const control = <FormArray>this.myForm.controls['scheduleDetail'];

    // instantiate a new day FormGroup;
    newDayGroup: FormGroup;
    let newDayGroup = this.initItems();

    // Add it to our formArray
    control.push(newDayGroup);
}

initItems(): FormGroup{
    // Here, we make the form for each day

    return this.formBuilder.group(new Company);
}

submit(){
    // do stuff and submit result
    console.log(this.myForm.value);
}










  loadCompanyList(){
    this.networkCalling.getCompanyList().subscribe(
      data => {
        this.companys = data.data;
        console.log("Companys List...")
        console.log(this.companys);
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  updateCompany(id: number){
    console.log(id);
  }

  addCompany(){
    this.btnLoadingIcon = true;

    let formData = new FormData();
    formData = this.networkCalling.prepareRequestbody(this.inputFormGroup);

    this.networkCalling.addCompanyRequest(formData).subscribe(
      data => {
          console.log("Company Respnse");
          console.log(data.data);
      },
      err => {
        console.log("Company Respnse Failed");
        console.log(err);
      }
    );
  }

}
