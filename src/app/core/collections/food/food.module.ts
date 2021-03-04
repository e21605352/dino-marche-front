import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { SharedModule } from '../../../shared/shared.module';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

export const foodRouteList: Routes = [
  {
    path: '',
    component: FoodListComponent
  },
  {
    path: ':id',
    component: FoodDetailsComponent,
    data: {
      breadcrumb: {
        alias: 'goodiesName'
      }
    }
  }
];

@NgModule({
  declarations: [FoodListComponent, FoodDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(foodRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class FoodModule {}
