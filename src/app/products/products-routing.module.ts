import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path: '', component:  HomeComponent },
  {path: 'produtos/:categoria', component: ListProductsComponent},
  {path: 'categoria/:item', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
