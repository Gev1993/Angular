import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {ContactComponent} from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ContactComponent,
  ]

})

export class ContactModule { }
