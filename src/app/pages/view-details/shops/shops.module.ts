import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {ShopsComponent} from './shops.component';

const shopsModule: Routes = [
  {
    path: '', component: ShopsComponent
  }
];

@NgModule({
  declarations: [
    ShopsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shopsModule)
  ]
})

export class ShopsModule { }
