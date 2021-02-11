import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import localeFr from '@angular/common/locales/fr';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { paginatorFrench } from './material/mat-internationalization/paginator/paginator-fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app-layout.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: MatPaginatorIntl, useClass: paginatorFrench }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
