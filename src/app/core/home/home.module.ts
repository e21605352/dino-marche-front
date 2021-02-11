import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(homeRouteList)]
})
export class HomeModule {}
