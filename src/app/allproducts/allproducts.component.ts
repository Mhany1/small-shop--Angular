import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
products:any[]=[]
category:any[]=[]
cart:any[]=[]
addButton:boolean=false
amount:number=1
loading:boolean=false
  constructor(private productsservice:ProductsService) { }

  ngOnInit(): void {
    //All products
    this.productsservice.getAllproducts().subscribe(
      (items:any)=>{
      this.products=items;
      },error=>{alert ('Error')} 
    )


//All category

    this.productsservice.getAllcategories().subscribe(
      (items:any)=>{
      this.category=items;
      },error=>{alert ('Error')} 
    )
  }

  
//choose category
  getValue(event:any)
{
 let value=event.target.value
//  console.log(value);
 this.getAllproductsFilter(value)
}


//filter products
getAllproductsFilter(keyword:string)
{
this.productsservice.getAllproductsFilter(keyword).subscribe((items:any)=>{
this.products=items
})
}

add(product:any)
{
 var obj= {item:product,quantity:this.amount}
  
  // console.log(product)
  if ('cart' in localStorage) {
       this.cart=JSON.parse(localStorage.getItem('cart')!)
       var exist= this.cart.find(item=>item.id==obj.item.id)
    if (exist) {
           alert('Product is aready in cart')
  } else{
             this.cart.push(obj)
             localStorage.setItem('cart',JSON.stringify(this.cart))
  }
   
  }else{
    this.cart.push(obj)
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }



 
 


//  console.log('cart '+this.cart)
}

}







function quantity(product: any, quantity: any) {
  throw new Error('Function not implemented.');
}

