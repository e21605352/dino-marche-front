import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BarRatingModule } from 'ngx-bar-rating';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { ShoppingCartComponent } from './view/shopping-cart/shopping-cart.component';
import { PurchaseListItemComponent } from './components/purchase-list-item/purchase-list-item.component';
import { PurchaseResumeComponent } from './components/purchase-resume/purchase-resume.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';

export const shoppingCartRouteList: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
  }
];

@NgModule({
  declarations: [
    ShoppingCartComponent,
    PurchaseListItemComponent,
    PurchaseResumeComponent,
    PurchaseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingCartRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule,
    MatDividerModule,
    BarRatingModule,
    MatButtonModule
  ]
})
export class ShoppingCartModule {}
