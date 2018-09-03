import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpModule,
    CarouselModule.forRoot()
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class ProductsModule { }
