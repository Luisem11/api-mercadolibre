import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'products/search',
  component: ProductListComponent,
}, {
  path: ':id',
  component: ProductDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
