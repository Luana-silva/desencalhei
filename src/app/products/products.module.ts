import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { NguCarouselModule } from '@ngu/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { PublicityComponent } from '../shared/publicity/publicity.component';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AuthService } from '../shared/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    HttpModule,
    //HttpClientModule,
    NguCarouselModule,
    NgxPaginationModule,
    OrderModule
  ],
  declarations: [HomeComponent, PublicityComponent, ProductComponent, ListProductsComponent],
  providers: [HomeService, AuthService]
})
export class ProductsModule { }
