import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'src/app/_services/auth-guard.guard';
import { BusinessComponent } from '../business/business.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartUpdateComponent } from './cart-update/cart-update.component';

const routes: Routes = [
  {
    path: "", component: BusinessComponent, canActivateChild: [AuthGuardGuard],
    children:[
      {path: "cart/list", component: CartListComponent},
      {path: "cart/:size/list/:page", component: CartListComponent},
      {path: "cart/update", component: CartUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
