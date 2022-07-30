import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
id:any
detail:any={}

  constructor( private activatedRoute:ActivatedRoute,private productsservice:ProductsService) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    // console.log(this.id);
   }

  ngOnInit(): void {

    this.productsservice.getproductDetails(this.id).subscribe((res:any)=>{
       this.detail=res
      //  console.log(this.detail);
     
       
    })
  }
 
}


