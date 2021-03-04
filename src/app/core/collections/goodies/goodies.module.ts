import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { SharedModule } from '../../../shared/shared.module';
import { GoodiesListComponent } from './goodies-list/goodies-list.component';
import { GoodiesDetailsComponent } from './goodies-details/goodies-details.component';

export const goodiesRouteList: Routes = [
  {
    path: '',
    component: GoodiesListComponent
  },
  {
    path: ':id',
    component: GoodiesDetailsComponent,
    data: {
      breadcrumb: {
        alias: 'goodiesName'
      }
    }
  }
];

@NgModule({
  declarations: [GoodiesListComponent, GoodiesDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(goodiesRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class GoodiesModule {}
