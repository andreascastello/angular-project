import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./models/product.model";
import {ProductsService} from "./services/products.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'product-card';
  products!: Product[];
  search: string = '';
  sort: string = '';
    constructor(private productsService: ProductsService) { }


  ngOnInit() {
      this.search = '';
      this.products = this.productsService.getAllProducts();
      this.title = 'product-card';
  }
}
