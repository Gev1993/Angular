import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ViewDetailsComponent } from './view-details.component';


@NgModule({
  declarations: [
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ViewDetailsComponent
  ]

})

export class ViewDetailsModule { }
