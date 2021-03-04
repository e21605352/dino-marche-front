import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { NourritureComponent } from './nourriture/nourriture.component';
import { GoodiesComponent } from './goodies/goodies.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const collectionsRouteList: Routes = [
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
  },
  {
    loadChildren: () =>
      import('./dinosaur/dinosaur.module').then((m) => m.DinosaurModule),
    data: { breadcrumb: 'Dinosaures' }
  }
];

@NgModule({
  declarations: [
    NourritureComponent,
    GoodiesComponent,
    ContactComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(collectionsRouteList),
    BreadcrumbModule
  ]
})
export class CollectionsModule {}
