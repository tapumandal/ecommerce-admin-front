import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';
import { PorductDetailsComponent } from './porduct-details/porduct-details.component';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    CompanyComponent,
    CategoryComponent,
    PorductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    NgSelect2Module,
    FormsModule
  ]
})
export class ProductModule { }
