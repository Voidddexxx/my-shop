import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsStoreService} from "../../shared/products/products-store.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  readonly products$ = this.productsStoreService.products$;

  constructor(
    private productsStoreService: ProductsStoreService,
  ) {}

  ngOnInit() {
    this.productsStoreService.loadProducts();
  }

  trackBy(index: number) {
    return index;
  }
}
