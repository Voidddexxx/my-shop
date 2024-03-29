import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit
{
  @ViewChild(MatDrawer, {static: true}) private drawerComponent!: MatDrawer;
  @ViewChild('drawerViewPort', {static: true, read: ViewContainerRef}) private drawerViewPortElement!: ViewContainerRef;
  @ContentChild('list', {static: true}) private listTemplate!: TemplateRef<unknown>;

  ngOnInit() {
    this.insertList(this.listTemplate);
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  toggleDrawer() {
    this.drawerComponent.toggle();
    this.changeDetectorRef.markForCheck();
  }

  private insertList(template: TemplateRef<unknown>) {
    this.drawerViewPortElement.clear();
    this.drawerViewPortElement.createEmbeddedView(template);
  }

}
