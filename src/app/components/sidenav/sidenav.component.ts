import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {


  @ViewChild('drawer') private drawer!: MatDrawer;
  showFiller = false;
  inputInitValue = 'productName';

  toggleDrawer() {
    this.drawer.toggle();
  }
  log(event: HTMLInputElement) {
    console.log(event.value);
  }

}
