import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewDetailsComponent } from './pages/view-details/view-details.component';
import {ContactModule} from './pages/contact/contact.module';
import {LoginModule} from './pages/login/login.moduls';
import {RegisterModule} from './pages/register/register.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {ViewDetailsModule} from './pages/view-details/view-details.module';

const appRoutes: Routes = [
  { path: '', redirectTo:  'register', pathMatch: 'full'},
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail/:id', component: ViewDetailsComponent },
  { path: '**', component:  NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
    ContactModule,
    LoginModule,
    RegisterModule,
    NotFoundModule,
    ViewDetailsModule
  ]
})
export class AppRoutingModule { }
