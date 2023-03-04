import {BehaviorSubject, Observable} from "rxjs";
import {IProduct} from "./product.interface";
import {productsMock} from "./products.mock";
import {ProductsApiService} from "./products-api.service";
import {Injectable} from "@angular/core";

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class ProductsStoreService {
  private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

  constructor(
    private productsApi: ProductsApiService,
  ) {}

  get products$(): Observable<IProduct[] | null> {
    return this.productsStore$.asObservable();
  }

  loadProducts() {
    this.productsApi.getProducts$().subscribe(products => {
      this.productsStore$.next(products);
    })
    // setTimeout(() => {
    //   this.productsStore$.next(productsMock);
    // }, 2000);
  }



}
