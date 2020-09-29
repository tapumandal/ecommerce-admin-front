import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardGuard } from 'src/app/_services/auth-guard.guard';
import { BusinessComponent } from "../business/business.component";
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: "", component: BusinessComponent, canActivateChild: [AuthGuardGuard],
    children: [
      {path: "product/list", component: ProductListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
