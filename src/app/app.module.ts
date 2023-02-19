import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {SidenavModule} from "./components/sidenav/sidenav.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
