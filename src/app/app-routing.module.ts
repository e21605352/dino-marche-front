import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';

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
  { path: 'login', component: SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
