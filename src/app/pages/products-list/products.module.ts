import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ProductsComponent} from "./products.component";



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
        MatCardModule,
    ]
})
export class ProductsModule { }
