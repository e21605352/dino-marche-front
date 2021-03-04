import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { DinosaurComponent } from './dinosaur/dinosaur.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { GoodiesComponent } from './goodies/goodies.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

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
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      breadcrumb: 'contact'
    }
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    data: {
      breadcrumb: 'cart'
    }
  }
];

@NgModule({
  declarations: [DinosaurComponent, NourritureComponent, GoodiesComponent, ContactComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(collectionsRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class CollectionsModule { }
