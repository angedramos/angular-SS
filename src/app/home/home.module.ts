import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CsvComponent } from './CSV/csv/csv.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './ProductsAPI/products/products.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { provideAnimations } from '@angular/platform-browser/animations';
import { UpdateProductComponent } from './ProductsAPI/updateProduct/update-product/update-product.component';
import { CreateProductComponent } from './ProductsAPI/createProduct/create-product/create-product.component';


@NgModule({
  declarations: [
    CsvComponent,
    HomeComponent,
    ProductsComponent,
    UpdateProductComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
  
  ],
  providers: [provideAnimations()],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
