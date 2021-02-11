import { Component, Input } from '@angular/core';
import { IProductItem as Product } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input() product!: Product;
}
