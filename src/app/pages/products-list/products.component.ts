import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {productsMock} from "../../shared/products/products.mock";
import {IProduct} from "../../shared/products/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  products: IProduct[] | undefined = undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.products = productsMock.slice(0, 4);
      this.changeDetectorRef.markForCheck();
    }, 20000);
    setTimeout(() => {
      this.products = productsMock.map(item => ({...item}));
      this.changeDetectorRef.markForCheck();
    }, 70000);
  }

  trackBy(index: number) {
    return index;
  }
}
