import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BarRatingModule } from 'ngx-bar-rating';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbHeaderLoginComponent } from './components/breadcrumb-header-login/breadcrumb-header-login.component';
import { BreadcrumbHeaderComponent } from './components/breadcrumb-header/breadcrumb-header.component';
import { ProductListHeaderComponent } from './components/product-list-header/product-list-header.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListSortComponent } from './components/product-list-sort/product-list-sort.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductListComponent,
    ProductListHeaderComponent,
    ProductListSortComponent,
    BreadcrumbHeaderComponent,
    BreadcrumbHeaderLoginComponent
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
    BreadcrumbHeaderComponent,
    BreadcrumbHeaderLoginComponent
  ]
})
export class SharedModule {}
