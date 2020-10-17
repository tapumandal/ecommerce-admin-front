import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardGuard } from 'src/app/_services/auth-guard.guard';
import { BusinessComponent } from "../business/business.component";
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: "", component: BusinessComponent, canActivateChild: [AuthGuardGuard],
    children: [
      {path: "product/list", component: ProductListComponent},
      {path: "product/add", component: ProductAddComponent},
      {path: "product/company", component: CompanyComponent},
      {path: "product/category", component: CategoryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
