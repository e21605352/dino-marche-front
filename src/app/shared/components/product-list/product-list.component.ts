import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { IProductItem as Product } from '../../interfaces/IProduct';
import { Sort } from '../../types/Sort';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products!: Product[];
  @Input() route!: string;

  displayedProducts!: Product[];
  pageSize = 3;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.updatePagination(0);
  }
  /**
   * Met à jour les produits affichés avec la pagination.
   * @param pageIndex
   */
  updatePagination(pageIndex: number): void {
    const first = pageIndex * this.pageSize;
    const last = (pageIndex + 1) * this.pageSize;
    this.displayedProducts = this.products.slice(first, last);
  }

  getItemRoute(item: Product): string {
    return `${this.route}/${item.id}`;
  }

  sortProducts(sort: Sort): void {
    this[sort]();

    const pageIndex = 0;
    this.updatePagination(pageIndex);
    this.paginator.pageIndex = pageIndex;
  }

  none(): void {
    // Do nothing
  }

  titleAscending(): void {
    this.products.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  titleDescending(): void {
    this.products.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }

  priceAscending(): void {
    this.products.sort(function (a, b) {
      const priceA = a.price;
      const priceB = b.price;

      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
      return 0;
    });
  }

  priceDescending(): void {
    this.products.sort(function (a, b) {
      const priceA = a.price;
      const priceB = b.price;

      if (priceA > priceB) {
        return -1;
      }
      if (priceA < priceB) {
        return 1;
      }
      return 0;
    });
  }

  lastCreated(): void {
    // TODO
  }
}
