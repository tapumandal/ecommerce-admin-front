import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from "./_module/auth/auth.module";
import { BusinessModule } from "src/app/_module/business/business.module";
import { ProductModule } from "src/app/_module/product/product.module";
import { SettingsModule } from "src/app/_module/settings/settings.module";
import { NgSelect2Module } from 'ng-select2';

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
    BusinessModule,
    ProductModule,
    NgSelect2Module,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
