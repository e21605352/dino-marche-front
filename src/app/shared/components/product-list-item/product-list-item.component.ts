import { Component, Input, OnInit } from '@angular/core';
import { IProductItem as Product } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {
    this.product = {
      image: 'assets/img/tyrannosaurus_rex.png',
      name: 'Tyrannosaurus rex',
      alias: 'Lézard à bras',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
      rate: 3,
      reviewsNumber: 54,
      price: 1500
    };
  }
}
