import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {CityComponent} from './city/city.component';
import {CityCreateComponent} from './city-create/city-create.component';
import {CityEditComponent} from './city-edit/city-edit.component';
import {CityDeleteComponent} from './city-delete/city-delete.component';


const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'city/list',
    component: CityComponent
  },
  {
    path: 'city/create',
    component: CityCreateComponent
  },
  {
    path: 'city/edit/:id',
    component: CityEditComponent
  },
  {
    path: 'city/delete/:id',
    component: CityDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
