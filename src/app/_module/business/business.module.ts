import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserComponent } from './user/user.component';
import { CreateComponent } from './user/create/create.component';
import { UpdateComponent } from './user/update/update.component';
import { BusinessComponent } from './business.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LeftBarComponent,
    TopBarComponent,
    UserComponent,
    CreateComponent,
    UpdateComponent,
    BusinessComponent,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { 
  
}
