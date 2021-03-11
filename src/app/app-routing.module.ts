import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ContactComponent } from './core/contact/contact.component';
import { NotFoundComponent } from 'src/app/layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
    data: { breadcrumb: 'Accueil' }
  },
  {
    path: 'accueil',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./core/collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
    data: { breadcrumb: { skip: true } }
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./core/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
    data: { breadcrumb: 'Panier' }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./core/contact/contact.module').then((m) => m.ContactModule)
  },
  { path: 'login', component: SigninComponent },
  { path: 'newAccount', component: SignupComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
