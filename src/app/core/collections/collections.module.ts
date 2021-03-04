import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbModule } from 'xng-breadcrumb';

export const collectionsRouteList: Routes = [
  {
    path: 'dinosaures',
    loadChildren: () =>
      import('./dinosaur/dinosaur.module').then((m) => m.DinosaurModule),
    data: { breadcrumb: 'Dinosaures' }
  },
  {
    path: 'nourriture',
    loadChildren: () => import('./food/food.module').then((m) => m.FoodModule),
    data: { breadcrumb: 'Nourriture' }
  },
  {
    path: 'goodies',
    loadChildren: () =>
      import('./goodies/goodies.module').then((m) => m.GoodiesModule),
    data: { breadcrumb: 'Goodies' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(collectionsRouteList),
    BreadcrumbModule
  ]
})
export class CollectionsModule {}
