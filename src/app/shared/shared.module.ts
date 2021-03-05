import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BarRatingModule } from 'ngx-bar-rating';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbHeaderHomeComponent } from './components/breadcrumb-header-home/breadcrumb-header-home.component';
import { BreadcrumbHeaderLoginComponent } from './components/breadcrumb-header-login/breadcrumb-header-login.component';
import { BreadcrumbHeaderComponent } from './components/breadcrumb-header/breadcrumb-header.component';
import { ProductListHeaderComponent } from './components/product-list-header/product-list-header.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListSortComponent } from './components/product-list-sort/product-list-sort.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BreadcrumbHeaderContactComponent } from './components/breadcrumb-header-contact/breadcrumb-header-contact.component';
import { BreadcrumbHeaderCartComponent } from './components/breadcrumb-header-cart/breadcrumb-header-cart.component';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReviewListItemComponent } from './components/review-list-item/review-list-item.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductListComponent,
    ProductListHeaderComponent,
    ProductListSortComponent,
    BreadcrumbHeaderComponent,
    BreadcrumbHeaderLoginComponent,
    BreadcrumbHeaderHomeComponent,
    BreadcrumbHeaderContactComponent,
    BreadcrumbHeaderCartComponent,
    ProductDetailsComponent,
    ReviewListItemComponent,
    ReviewFormComponent
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
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    ProductListItemComponent,
    ProductListComponent,
    BreadcrumbHeaderComponent,
    BreadcrumbHeaderLoginComponent,
    BreadcrumbHeaderHomeComponent,
    BreadcrumbHeaderContactComponent,
    BreadcrumbHeaderCartComponent,
    ProductDetailsComponent
  ]
})
export class SharedModule {}
