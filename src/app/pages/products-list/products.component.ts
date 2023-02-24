import { Component } from '@angular/core';
import {productsMock} from "../../shared/products/products.mock";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = productsMock;

}
