import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarRatingModule } from 'ngx-bar-rating';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductListItemComponent, ProductListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BarRatingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [ProductListItemComponent]
})
export class SharedModule {}
