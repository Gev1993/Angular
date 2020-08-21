import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {NotFoundComponent} from './not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    NotFoundComponent
  ]

})

export class NotFoundModule { }
