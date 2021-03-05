import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/services/product.service';
import { IProductItem as Product } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-dinosaur-details',
  templateUrl: './dinosaur-details.component.html',
  styleUrls: ['./dinosaur-details.component.scss']
})
export class DinosaurDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private breadcrumbService: BreadcrumbService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.retrieveProduct(this.route.snapshot.paramMap.get('id') as string);
  }

  retrieveProduct(id: string): void {
    this.productService.getProduct(id).subscribe(
      (data: Product) => {
        this.product = data;
        this.setBreadcrumbAlias();
      },
      (error: Observable<never>) => console.log(error)
    );
    // TEMP
    this.product = {
      id: '5',
      image: 'assets/img/tyrannosaurus_rex.png',
      name: 'Graou graou le dino',
      alias: 'Lézard à bras',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget nulla suscipit, dictum velit eu, tincidunt lectus. Nulla at massa sit amet orci cursus molestie. Praesent sed dolor eros. Maecenas condimentum turpis at sapien',
      rate: 3,
      reviewsNumber: 54,
      price: 2651,
      type: 'Dinosaur'
    };
  }

  private setBreadcrumbAlias(): void {
    this.breadcrumbService.set('@dinosaurName', this.product.name);
  }
}
