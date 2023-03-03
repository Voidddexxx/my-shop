import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ProductsComponent} from "./products.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";
import {CarouselModule} from "../../shared/carousel/carousel.module";


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
    MatProgressSpinnerModule,
    MatButtonModule,
    CarouselModule
  ]
})
export class ProductsModule { }
