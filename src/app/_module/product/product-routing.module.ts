import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardGuard } from 'src/app/_services/auth-guard.guard';
import { BusinessComponent } from "../business/business.component";
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: "", component: BusinessComponent, canActivateChild: [AuthGuardGuard],
    children: [
      {path: "product/list", component: ProductListComponent},
      {path: "product/add", component: ProductAddComponent},
      {path: "product/category/list", component: CategoryListComponent},
      {path: "product/category/add", component: CategoryAddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
