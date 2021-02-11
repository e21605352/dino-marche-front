import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarRatingModule } from 'ngx-bar-rating';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListHeaderComponent } from './components/product-list-header/product-list-header.component';
import { ProductListSortComponent } from './components/product-list-sort/product-list-sort.component';
import { BreadcrumbHeaderComponent } from './components/breadcrumb-header/breadcrumb-header.component';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductListComponent,
    ProductListHeaderComponent,
    ProductListSortComponent,
    BreadcrumbHeaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BarRatingModule,
    BreadcrumbModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    ProductListItemComponent,
    ProductListComponent,
    BreadcrumbHeaderComponent
  ]
})
export class SharedModule {}
