import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { IProductItem as Product } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [];
  resultsLength = 0;
  isLoadingResults = true;

  ngOnInit(): void {
    this.products = [
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      },
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      },
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      },
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      },
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      },
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      },
      {
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Tyrannosaurus rex',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 1500
      }
    ];
    this.resultsLength = this.products.length;
  }

  ngAfterViewInit() {}
}
