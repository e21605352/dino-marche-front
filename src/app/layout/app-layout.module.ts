import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { HandsetLayoutService } from 'src/app/shared/services/handset-layout.service';
import { NavigationBarService } from 'src/app/shared/services/navigation-bar.service';
import { SharedModule } from '../shared/shared.module';

import { NavigationComponent } from './navigation/view/navigation.component';
import { HandsetNavigationComponent } from './navigation/components/handset-navigation/handset-navigation.component';
import { FullscreenNavigationComponent } from './navigation/components/fullscreen-navigation/fullscreen-navigation.component';
import { SideNavigationComponent } from './navigation/components/side-navigation/side-navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HandsetNavigationComponent,
    FullscreenNavigationComponent,
    SideNavigationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule,
    SharedModule
  ],
  providers: [HandsetLayoutService, NavigationBarService],
  exports: [NavigationComponent]
})
export class AppLayoutModule { }
