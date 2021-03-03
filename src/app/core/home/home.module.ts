import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

export const homeRouteList: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Accueil'
    }
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, 
    RouterModule.forChild(homeRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class HomeModule {}
