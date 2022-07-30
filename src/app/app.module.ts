import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartsComponent } from './carts/carts.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllproductsComponent,
    ProductsDetailsComponent,
    CartsComponent,
    ProductdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // CartsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
