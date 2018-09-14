import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpModule,
    NguCarouselModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class ProductsModule { }
