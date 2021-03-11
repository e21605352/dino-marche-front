import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-dinosaur-details',
  templateUrl: './dinosaur-details.component.html',
  styleUrls: ['./dinosaur-details.component.scss']
})
export class DinosaurDetailsComponent implements OnInit {
  product!: IProduct;

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
      (data: IProduct) => {
        this.product = data;
        this.setBreadcrumbAlias();
      },
      (error: Observable<never>) => console.log(error)
    );
  }

  private setBreadcrumbAlias(): void {
    this.breadcrumbService.set('@dinosaurName', this.product.name);
  }
}
