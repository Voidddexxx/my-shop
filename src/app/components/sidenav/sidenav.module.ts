import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {ProductsModule} from "../../pages/products-list/products.module";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        ProductsModule
    ]
})
export class SidenavModule { }
