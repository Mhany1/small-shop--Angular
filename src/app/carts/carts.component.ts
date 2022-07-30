import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  cart: any[]=[];
  total:any=0
  sendOrder:boolean=false
  constructor() { }

  ngOnInit(): void {
    this.getcartproducts()
  }

  //get products
  getcartproducts(){
    if ('cart' in localStorage) {
      this.cart=JSON.parse(localStorage.getItem('cart')!)
      // console.log( this.cart);
      this.totalCost()
    }
   }

  

   //plus product
   plusnum(index:number)
   {
    this.cart[index].quantity++
    this.totalCost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
   }

   //mins product
   minsnum(index:number)
    {
      if ( this.cart[index].quantity>1) {
        this.cart[index].quantity--
        this.totalCost()
        localStorage.setItem('cart',JSON.stringify(this.cart))
      }
    }     


// delete product
  deleteProduct(index:number)
  {
 this.cart.splice(index,1)
 this.totalCost()
 localStorage.setItem('cart',JSON.stringify(this.cart))
  }

  //delete all cart
  deleteAll()
  {
    this.cart=[]
    this.totalCost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }

   //totall cost
   totalCost()
   {
    this.total=0
     for (const x in this.cart) 
     {
     this.total+=this.cart[x].item.price*this.cart[x].quantity
     }
   }
     
}


