import { Component, Input } from '@angular/core';
import { IProductItem as Product } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-purchase-list-item',
  templateUrl: './purchase-list-item.component.html',
  styleUrls: ['./purchase-list-item.component.scss']
})
export class PurchaseListItemComponent {
  @Input() product!: Product;
}
