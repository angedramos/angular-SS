import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProduct } from 'src/app/interface/CreateProduct';
import { Product } from 'src/app/interface/Product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  @Input() product: CreateProduct = {id:0, title:'', price:0, description:'', categoryId:0, images:[]}
  constructor(private productService: ApiService, private router:Router){

  }
  ngOnInit(): void {
      
  }

  addEmployee(){
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe(data=>{
     this.goToProductList();
    },
    
    error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/home/apiproducts']);
  }

  productList(){
    this.goToProductList();
  }
  onSubmit():void{

    if(this.product.title == '' ||
     this.product.description == '' || 
     (this.product.price == null ||  this.product.price == 0) ||
     (this.product.categoryId == null ||  this.product.categoryId == 0)||
     this.product.images.length == 0){
        alert("Please fill out all fields");
         return;
    }
    this.addEmployee();
  }
}
