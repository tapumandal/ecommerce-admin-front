import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Navigation } from 'src/app/_model/navigation.model';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  btnLoadingIcon = false;
  navigation: Navigation[];
  inputFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private networkCalling: NetworkcallingService, private errorManagement: ErrorManagementService) { }

  ngOnInit(): void {
    this.inputFormGroup = this.formBuilder.group(new Navigation());
    this.loadNavigation();
  }

  updateEntity(i: number){
    // console.log(this.itemListForm.get('items').value[i]);

    // this.networkCalling.updateNavigationRequest(this.itemListForm.get('items').value[i]).subscribe(
    //   data => {
    //     console.log("Update Navigation Respnse");
    //     console.log(data.data);
    //   },
    //   err => {
    //     console.log("Update Navigation Respnse Failed");
    //     console.log(err);
    //   }
    // );
  }
  
  deleteEntity(i:number){
    // this.networkCalling.deleteNavigationRequest(this.itemListForm.get('items').value[i].id).subscribe(
    //   data => {
        
    //     this.itemListForm.get('items').removeAt(i);
    //     console.log("Update Navigation Respnse");
    //     console.log(data.data);
    //   },
    //   err => {
    //     console.log("Update Navigation Respnse Failed");
    //     console.log(err);
    //   }
    // );
  }

  loadNavigation(){
    this.networkCalling.getNavigation().subscribe(
      data => {
        this.navigation = data.data;
        console.log("Navigation...")
        console.log(this.navigation);
        
        this.inputFormGroup = this.formBuilder.group(this.navigation);
      },
      err => {
        this.errorManagement.responseFaield(err);
      }
    )
  }

  createEntity(){
    this.btnLoadingIcon = true;

    let formData = new FormData();
    formData = this.networkCalling.prepareRequestbody(this.inputFormGroup);

    this.networkCalling.addNavigationRequest(formData).subscribe(
      data => {
          console.log("Create Navigation Respnse");
          console.log(data.data);
          this.btnLoadingIcon = false;

      },
      err => {
        console.log("Create Navigation Respnse Failed");
        console.log(err);
      }
    );
  }

}

