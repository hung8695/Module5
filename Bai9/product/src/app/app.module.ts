import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { DeleteComponent } from './product/delete/delete.component';
import { CityComponent } from './city/city.component';
import { CityCreateComponent } from './city-create/city-create.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityDeleteComponent } from './city-delete/city-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    DeleteComponent,
    CityComponent,
    CityCreateComponent,
    CityEditComponent,
    CityDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
