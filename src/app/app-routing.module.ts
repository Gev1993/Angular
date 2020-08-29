import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo:  'register', pathMatch: 'full'},
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'detail/:id', loadChildren: () => import('./pages/view-details/view-details.module').then(m => m.ViewDetailsModule)
  },
  {
     path: 'shops', loadChildren: () => import('./pages/view-details/shops/shops.module').then(m => m.ShopsModule)
  },
  {
    path: 'review', loadChildren: () => import('./pages/view-details/review/review.module').then(m => m.ReviewModule)},
  {
    path: 'info', loadChildren: () => import('./pages/view-details/info/info.module').then(m => m.InfoModule)
  },
  {
    path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
