import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { DinosaurComponent } from './dinosaur/dinosaur.component';

export const collectionsRouteList: Routes = [
  {
    path: 'dinosaures',
    component: DinosaurComponent,
    data: {
      breadcrumb: 'Dinosaures'
    }
  }
];

@NgModule({
  declarations: [DinosaurComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(collectionsRouteList),
    BreadcrumbModule,
    SharedModule
  ]
})
export class CollectionsModule {}
