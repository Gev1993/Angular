import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info.component';

const infoRouter: Routes = [
  {
    path: '', component: InfoComponent
  }
];

@NgModule({
  declarations: [
    InfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(infoRouter)
  ]
})

export class InfoModule { }
