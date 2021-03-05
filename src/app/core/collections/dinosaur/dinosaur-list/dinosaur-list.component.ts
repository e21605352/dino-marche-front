import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProductItem, IProducts } from 'src/app/shared/interfaces/IProduct';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.scss']
})
export class DinosaurListComponent implements OnInit {
  products!: IProductItem[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProductTypes('Dinosaur').subscribe(
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
