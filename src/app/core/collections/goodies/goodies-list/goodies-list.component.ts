import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import {
  IProductItems,
  IProductListItems
} from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-goodies-list',
  templateUrl: './goodies-list.component.html',
  styleUrls: ['./goodies-list.component.scss']
})
export class GoodiesListComponent implements OnInit {
  products!: IProductListItems;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProductTypes('Goodie').subscribe(
      (data: IProductItems) => {
        this.products = data.products;
      },
      (error: Observable<never>) => {
        console.log(error);
      }
    );
  }

  getUrl(): string {
    return this.router.url;
  }
}
