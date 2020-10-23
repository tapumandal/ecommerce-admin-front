import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardGuard } from '../../_services/auth-guard.guard';
import { BusinessComponent } from "../business/business.component";
import { NavigationComponent } from "./navigation/navigation.component";

const routes: Routes = [
  {
    path: "", component: BusinessComponent, canActivateChild: [AuthGuardGuard],
    children: [
      {path: "settings/navigation", component: NavigationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
