import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartUpdateComponent } from './cart-update/cart-update.component';


@NgModule({
  declarations: [CartListComponent, CartUpdateComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
