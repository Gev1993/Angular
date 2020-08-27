import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { ViewDetailsComponent } from './view-details.component';

const detailsRouter: Routes = [
  {
    path: '', component: ViewDetailsComponent
  }
];

@NgModule({
  declarations: [
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(detailsRouter),
  ]
})

export class ViewDetailsModule { }
