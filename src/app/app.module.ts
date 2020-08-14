import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { HeadersComponent } from './headers/headers.component';
import { CardsComponent } from './main/cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { DataService } from './core/server/data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
