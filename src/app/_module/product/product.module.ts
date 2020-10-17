import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    CompanyComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
