import {map, Observable} from "rxjs";
import {IProduct} from "./product.interface";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IProductsDto} from "./products-dto.interface";

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {

  constructor(
    private http: HttpClient
  ) {}
  getProducts$(): Observable<IProduct[]> {
    return this.http
      .get<IProductsDto>('https://course-angular.javascript.ru/api/products/suggestion')
      .pipe(
        map(({data}) => data.items)
      );
  }
}
