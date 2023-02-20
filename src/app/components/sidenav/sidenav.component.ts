import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit
{

  // @Input() listTemplate!: TemplateRef<unknown>;
  @ViewChild(MatDrawer, {static: true}) private drawerComponent!: MatDrawer;
  @ViewChild('drawerViewPort', {static: true, read: ViewContainerRef}) private drawerViewPortElement!: ViewContainerRef;
  @ContentChild('list', {static: true}) private listTemplate!: TemplateRef<unknown>;

  ngOnInit() {
    this.insertList(this.listTemplate);
  }

  toggleDrawer() {
    this.drawerComponent.toggle();
  }

  private insertList(template: TemplateRef<unknown>) {
    this.drawerViewPortElement.clear();
    this.drawerViewPortElement.createEmbeddedView(template);
  }

}
