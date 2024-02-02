import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/interface/Product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() data:any
  products: Product[] = [];
  length = 0;
  itemsPerPage=5;
  pageSizeOptions:number[] = [5,10,15,20];
  pageEvent!:PageEvent;
  getProduct: Product = { id: 0, title: '', price: 0, description: '' };

  constructor(private productService: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
  }
  Search(){
    if( this.getProduct.title == ""){
     this.ngOnInit();
    }
    else{
      this.products = this.products.filter(res => {
        return res.title.toLocaleLowerCase().match(this.getProduct.title.toLocaleLowerCase());
      })
    }
  }

  getProducts(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      this.length = data.length
      console.log(data);
    })
  }

  addProduct(){
    this.router.navigate(['home/apiproducts/create-product']);
  }
  Home(){
    this.router.navigate(['home']); 
  }

  updateProduct(id: number){
    this.router.navigate(['home/apiproducts', id]);
  }

  deleteProduct(id: number){
    const index = this.products.findIndex(p=> p.id === id)
    let r = confirm("Are you sure to delete?");
    if (r==true) {
       this.productService.deleteProduct(id).subscribe(()=>{
         this.products.splice(index,1);
       });
    } 
    console.log(true);
  }
}
