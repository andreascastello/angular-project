import {Component, Input, OnInit} from '@angular/core';
import {Product, uiPrice} from '../models/product.model';
import {ProductsService} from '../services/products.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  //styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() myProduct!: Product;

  selectedDeviceObj : number = 0;
  onChangeObj(e: any) {
    this.selectedDeviceObj = e.target.value;
  }

  constructor(private productsService: ProductsService) { }

  onAddLike() {
    this.productsService.onLikeProduct(this.myProduct)
  }
}
