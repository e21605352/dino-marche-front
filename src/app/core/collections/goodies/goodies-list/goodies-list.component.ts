import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, IProductItem } from 'src/app/shared/interfaces/IProduct';


@Component({
  selector: 'app-goodies-list',
  templateUrl: './goodies-list.component.html',
  styleUrls: ['./goodies-list.component.scss']
})
export class GoodiesListComponent implements OnInit {
  products!: IProductItem[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProductTypes('Goodie').subscribe(
      (data: IProduct) => {
        this.products = data.products;
      },
      (error: Observable<never>) => {
        console.log(error);
      }
    );
    // TEMP
    this.products = [
      {
        id: '1',
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'A',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 35434,
        type: 'Dinosaur'
      },
      {
        id: '2',
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'Z',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 654,
        type: 'Dinosaur'
      },
      {
        id: '3',
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'H',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 4174,
        type: 'Dinosaur'
      },
      {
        id: '4',
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'S',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 333,
        type: 'Dinosaur'
      },
      {
        id: '5',
        image: 'assets/img/tyrannosaurus_rex.png',
        name: 'X',
        alias: 'Lézard à bras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
        rate: 3,
        reviewsNumber: 54,
        price: 2651,
        type: 'Dinosaur'
      }
    ];
  }

  getUrl(): string {
    return this.router.url;
  }
}
