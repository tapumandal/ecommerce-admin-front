import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
