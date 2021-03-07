import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProductItem, IProducts } from 'src/app/shared/interfaces/IProduct';
import { environment } from "src/environments/environment";


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  products!: IProductItem[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProductTypes('Food').subscribe(
      (data: IProducts) => {
        this.products = data.products.map((v) => ({
          ...v,
          images: `${environment.baseUrl}${(v.images as unknown as string[])[0]}`
        }));
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
