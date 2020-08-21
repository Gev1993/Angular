import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {AboutComponent} from './about.component';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    AboutComponent,
  ]

})

export class AboutModule { }
