import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AppLayoutModule } from './layout/app-layout.module';
import { paginatorFrench } from './material/mat-internationalization/paginator/paginator-fr';
import { SharedModule } from './shared/shared.module';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, SigninComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: MatPaginatorIntl, useClass: paginatorFrench }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
