import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from './contact.component';

export const contactRouteList: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      breadcrumb: 'Contact'
    }
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule,
    RouterModule.forChild(contactRouteList),
    FlexLayoutModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class ContactModule { }
