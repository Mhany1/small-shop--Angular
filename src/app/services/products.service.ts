import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../Iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
//All products
  url:string='https://fakestoreapi.com/products'
  getAllproducts():Observable<Iproducts[]>
  {
    return this.http.get<Iproducts[]>(this.url)
  }
// Category(filter)
_url:string='https://fakestoreapi.com/products/categories'
getAllcategories():Observable<Iproducts[]>
{
  return this.http.get<Iproducts[]>(this._url)
}
//filter
getAllproductsFilter(keyword:string):Observable<Iproducts[]>
{
  return this.http.get<Iproducts[]>('https://fakestoreapi.com/products/category/'+keyword)
}

//product details
getproductDetails(id:any):Observable<Iproducts[]>
{
  return this.http.get<Iproducts[]>('https://fakestoreapi.com/products/'+id)
}

}




