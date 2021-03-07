import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProductItem } from 'src/app/shared/interfaces/IProduct';
import { environment } from "src/environments/environment";
import { BreadcrumbService } from 'xng-breadcrumb';


@Component({
  selector: 'app-goodies-details',
  templateUrl: './goodies-details.component.html',
  styleUrls: ['./goodies-details.component.scss']
})
export class GoodiesDetailsComponent implements OnInit {
  product!: IProductItem;

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
      (data: IProductItem) => {
        this.product = data;
        this.product.images = `${environment.baseUrl}${(data.images as unknown as string[])[0]}`;
        this.setBreadcrumbAlias();
      },
      (error: Observable<never>) => console.log(error)
    );
  }

  private setBreadcrumbAlias(): void {
    this.breadcrumbService.set('@dinosaurName', this.product.name);
  }
}
