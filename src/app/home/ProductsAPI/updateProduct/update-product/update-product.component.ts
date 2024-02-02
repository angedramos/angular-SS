import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/Product';
import { UpdateProduct } from 'src/app/interface/UpdateProduct';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  myForm!:FormGroup;
  disabledButton = true;
  @Input()product!: Product;
  getProduct: UpdateProduct = {id:0, title:'', price:0};
  id!: number;
  constructor(private productService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = 

    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data=>{
      this.getProduct = data;
    },
    error => console.log(error));
  }

  editProduct(){
    this.productService.updateProduct(this.id,this.getProduct).subscribe(data=>{
      console.log(this.getProduct);
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
    console.log(this.getProduct.title);
    console.log(this.getProduct.price);
    if(this.getProduct.title == '' || (this.getProduct.price == null ||  this.getProduct.price == 0) ){
      alert('Neither Title or Price must be empty');
      return
    }
    this.editProduct();
  }
}
