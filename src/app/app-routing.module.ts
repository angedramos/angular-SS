import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { CsvComponent } from './home/CSV/csv/csv.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './home/ProductsAPI/products/products.component';
import { CreateProductComponent } from './home/ProductsAPI/createProduct/create-product/create-product.component';
import { UpdateProductComponent } from './home/ProductsAPI/updateProduct/update-product/update-product.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {path: 'home/csv', component:CsvComponent},
  {path: 'home/apiproducts', component: ProductsComponent},
  {path:'home/apiproducts/create-product', component: CreateProductComponent},
  {path:'home/apiproducts/:id', component: UpdateProductComponent},

  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
