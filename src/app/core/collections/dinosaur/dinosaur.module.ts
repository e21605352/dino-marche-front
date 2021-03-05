import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatDividerModule } from '@angular/material/divider';

import { SharedModule } from '../../../shared/shared.module';
import { DinosaurListComponent } from './dinosaur-list/dinosaur-list.component';
import { DinosaurDetailsComponent } from './dinosaur-details/dinosaur-details.component';

export const dinosaurRouteList: Routes = [
  {
    path: '',
    component: DinosaurListComponent
  },
  {
    path: ':id',
    component: DinosaurDetailsComponent,
    data: {
      breadcrumb: {
        alias: 'dinosaurName'
      }
    }
  }
];

@NgModule({
  declarations: [DinosaurListComponent, DinosaurDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dinosaurRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule,
    MatDividerModule
  ]
})
export class DinosaurModule {}
