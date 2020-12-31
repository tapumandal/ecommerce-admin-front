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
  isCustomer:boolean = false;
  hideInPrint:boolean = false;
  statuses:any[] = ["Pending", "Processing", "Picked", "Delivered"];

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

  
  changeStatus(cartId:number, status:string){
      if(this.cart.id == cartId){
        this.cart.status = status;
        this.networkCalling.updateCart(this.cart).subscribe(
          data =>{
            console.log("Status Updated");
          },
          err => {
            console.log("Something is wrong");
          }
        )
      }
  }

  print(){
    this.isCustomer = true;
    this.hideInPrint = true;
  }

  printCustomerCopy(){
    this.isCustomer = true;
    this.hideInPrint = true;
  }
  printCompanyCopy(){
    this.isCustomer = false;
    this.hideInPrint = true;

    // const printContent = document.getElementById("invoice");
    // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // WindowPrt.document.write(printContent.innerHTML);
    // WindowPrt.document.close();
    // WindowPrt.focus();
    // WindowPrt.print();
    // WindowPrt.close();

    
      var prtContent = document.getElementById("invoice");
      var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      
      WinPrint.document.write('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
      
      // To keep styling
      var file = WinPrint.document.createElement("link");
      file.setAttribute("rel", "stylesheet");
      file.setAttribute("type", "text/css");
      file.setAttribute("href", 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
      WinPrint.document.head.appendChild(file);
  
      
      // WinPrint.document.write(prtContent.innerHTML);
      // WinPrint.document.close();
      // WinPrint.setTimeout(function(){
      //   WinPrint.focus();
      //   WinPrint.print();
      //   WinPrint.close();
      // }, 1000);

  }
  invoiceReset(){
    this.isCustomer = false;
    this.hideInPrint = false;
  }



  update(){
    console.log("Update");
  }

}
