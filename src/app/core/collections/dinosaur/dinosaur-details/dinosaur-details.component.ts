import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

import { IProductItem as Product } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-dinosaur-details',
  templateUrl: './dinosaur-details.component.html',
  styleUrls: ['./dinosaur-details.component.scss']
})
export class DinosaurDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveProduct(this.route.snapshot.paramMap.get('id') as string);

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

    this.setBreadcrumbAlias();
  }

  retrieveProduct(id: string): void {
    // this.habilitationService.get(id).subscribe(
    //   (data) => {
    //     this.habilitation = data;
    //     this.setBreadcrumbAlias();
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  private setBreadcrumbAlias(): void {
    this.breadcrumbService.set('@dinosaurName', this.product.name);
  }
}
