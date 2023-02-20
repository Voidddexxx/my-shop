import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ProductsModule { }
