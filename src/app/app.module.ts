import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelect2Module } from 'ng-select2';
import { HomeComponent } from './home/home.component';
import { AuthModule } from "./_module/auth/auth.module";
import { SettingsModule } from "src/app/_module/settings/settings.module";
import { BusinessModule } from "src/app/_module/business/business.module";
import { ProductModule } from "src/app/_module/product/product.module";
import { CartModule } from "src/app/_module/cart/cart.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    NgSelect2Module,
    SettingsModule,
    BusinessModule,
    ProductModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
