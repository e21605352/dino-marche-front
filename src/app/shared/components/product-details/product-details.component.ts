import { Component, Input } from '@angular/core';

import { IProductItem as Product } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  quantity = 1;

  test = [1, 2, 3, 4, 5];

  doPlus(): void {
    this.quantity++;
  }

  doMinus(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
