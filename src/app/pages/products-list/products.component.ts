import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {productsMock} from "../../shared/products/products.mock";
import {IProduct} from "../../shared/products/product.interface";
import {map, Observable, Subject, Subscription, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  // products: IProduct[] | undefined = undefined;
  readonly products$: Observable<IProduct[]> = timer(2000).pipe(
    map(() => productsMock)
  );

  // private readonly subscription: Subscription = new Subscription();
  // private readonly destroy$ = new Subject<void>();
  // constructor(
  //   private changeDetectorRef: ChangeDetectorRef,
  // ) { }

  // ngOnInit() {
   // this.products$
   //   .pipe(
   //     takeUntil(this.destroy$),
   //   )
   //   .subscribe((products) => {
   //        this.products = products;
   //        this.changeDetectorRef.markForCheck();
   //      });
  // }

  // ngOnDestroy() {
    // this.subscription?.unsubscribe();
    // this.destroy$.next();
    // this.destroy$.complete();
  // }

  trackBy(index: number) {
    return index;
  }
}
