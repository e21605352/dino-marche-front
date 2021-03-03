import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { DinosaurComponent } from './dinosaur/dinosaur.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { GoodiesComponent } from './goodies/goodies.component';

export const collectionsRouteList: Routes = [
  {
    path: 'dinosaures',
    component: DinosaurComponent,
    data: {
      breadcrumb: 'Dinosaures'
    }
  },
  {
    path: 'nourriture',
    component: NourritureComponent,
    data: {
      breadcrumb: 'Nourriture'
    }
  },
  {
    path: 'goodies',
    component: GoodiesComponent,
    data: {
      breadcrumb: 'Goodies'
    }
  }
];

@NgModule({
  declarations: [DinosaurComponent, NourritureComponent, GoodiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(collectionsRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class CollectionsModule {}
