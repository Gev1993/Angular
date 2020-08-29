import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {ReviewesComponent} from './reviewes.component';

const reviewRoutes: Routes = [
  {
    path: '', component: ReviewesComponent
  }
]

@NgModule({
  declarations: [
    ReviewesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(reviewRoutes)
  ]
})

export class ReviewModule { }
