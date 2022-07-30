import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartsComponent } from './carts/carts.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [
 {path:'products',component:AllproductsComponent},
 {path:'details/:id',component:ProductsDetailsComponent},
 {path:'cart',component:CartsComponent},
 {path:'**',component:AllproductsComponent},
 {path:'',component:AllproductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
