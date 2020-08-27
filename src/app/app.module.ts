import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { HeadersComponent } from './headers/headers.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { DataService } from './core/service/data.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './pages/login/login.moduls';
import { NotFoundModule } from './pages/not-found/not-found.module';
import {RegisterModule} from './pages/register/register.module';
import {ViewDetailsModule} from './pages/view-details/view-details.module';
import {ContactModule} from './pages/contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ContactModule,
    LoginModule,
    RegisterModule,
    NotFoundModule,
    ViewDetailsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
