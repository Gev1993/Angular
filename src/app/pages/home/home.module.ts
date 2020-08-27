import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {CardsComponent} from '../../main/cards/cards.component';
import {AboutModule} from '../about/about.module';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes),
    FormsModule,
    AboutModule,
    ReactiveFormsModule
  ],

})

export class HomeModule { }
