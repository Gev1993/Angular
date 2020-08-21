import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewDetailsComponent } from './pages/view-details/view-details.component';
import {AboutModule} from './pages/about/about.module';
import {HomeModule} from './pages/home/home.module';
import {ContactModule} from './pages/contact/contact.module';
import {LoginModule} from './pages/login/login.moduls';
import {RegisterModule} from './pages/register/register.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {ViewDetailsModule} from './pages/view-details/view-details.module';

const appRoutes: Routes = [
  { path: '', redirectTo:  'register', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail/:id', component: ViewDetailsComponent },
  { path: '**', component:  NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    AboutModule,
    HomeModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
    HomeModule,
    AboutModule,
    ContactModule,
    LoginModule,
    RegisterModule,
    NotFoundModule,
    ViewDetailsModule
  ]
})
export class AppRoutingModule { }
