import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/Product';
import { CreateProduct } from '../interface/CreateProduct';
import { UpdateProduct } from '../interface/UpdateProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URLBase = "https://api.escuelajs.co/api/v1/products";
  constructor(private httpClient: HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.URLBase}`);
  }
  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.URLBase}/${id}`);  
  }
  createProduct(product:CreateProduct):Observable<object>{
    return this.httpClient.post(`${this.URLBase}`,product);
  }
  updateProduct(id:number, product:UpdateProduct):Observable<object>{
    return this.httpClient.put(`${this.URLBase}/${id}`, product);
  }
  deleteProduct(id:number):Observable<object>{
    return this.httpClient.delete(`${this.URLBase}/${id}`);
  }
}
