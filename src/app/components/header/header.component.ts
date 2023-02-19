import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() set myTitle(title: string) {
    this.name = title;
  }
  @Output()
  menuClick = new EventEmitter<Event>;

  name = 'Shop';



}
