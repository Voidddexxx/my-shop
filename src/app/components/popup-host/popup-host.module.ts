import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupHostComponent } from './popup-host.component';
import { InsertPopupComponent } from './insert-popup/insert-popup.component';



@NgModule({
    declarations: [
        PopupHostComponent,
        InsertPopupComponent
    ],
    exports: [
        PopupHostComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PopupHostModule { }
