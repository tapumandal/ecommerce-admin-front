import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Company } from "src/app/_model/company.model";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  btnLoadingIcon = false;
  companys: Company[];

  companyAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildCompanyAddForm();
  }

  buildCompanyAddForm(){
    this.companyAddForm = this.formBuilder.group({
      name: ""
    })
  }

  addCompany(){
    this.btnLoadingIcon = true;

  }

}
