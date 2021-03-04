import { Component, Input } from '@angular/core';

import { IProductItem as Product } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product!: Product;
}
