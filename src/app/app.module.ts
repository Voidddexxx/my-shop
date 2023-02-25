import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {SidenavModule} from "./components/sidenav/sidenav.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductsModule} from "./pages/products-list/products.module";
import {MatListModule} from "@angular/material/list";
import {PopupHostModule} from "./components/popup-host/popup-host.module";
import {InsertShadowModule} from "./shared/insert-shadow/insert-shadow.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavModule,
    ProductsModule,
    MatListModule,
    PopupHostModule,
    InsertShadowModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
