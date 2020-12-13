import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/_model/cart.model';
import { AppStorageService } from 'src/app/_services/app-storage.service';
import { ErrorManagementService } from 'src/app/_services/error-management.service';
import { NetworkcallingService } from 'src/app/_services/networkcalling.service';

@Component({
  selector: 'app-cart-update',
  templateUrl: './cart-update.component.html',
  styleUrls: ['./cart-update.component.css']
})
export class CartUpdateComponent implements OnInit {

  cart: Cart;
  inputFormGroup: FormGroup;


  constructor(private storage: AppStorageService, 
              private route: ActivatedRoute, 
              private formBuilder: FormBuilder, 
              private networkCalling: NetworkcallingService,
              private errorManagement: ErrorManagementService
              ) { }

  ngOnInit(): void {
    this.cart = this.storage.getDetailsObject();

    this.inputFormGroup = this.formBuilder.group(this.cart);
  }

  update(){
    console.log("Update");
  }

}
