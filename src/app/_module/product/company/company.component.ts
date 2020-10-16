import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Company } from "src/app/_model/company.model";
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  btnLoadingIcon = false;
  inputFormGroup: FormGroup;
  companys: Company[];

  constructor(private formBuilder: FormBuilder, private networkCalling: NetworkcallingService) { }

  ngOnInit(): void {
    this.inputFormGroup = this.formBuilder.group(new Company());
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
