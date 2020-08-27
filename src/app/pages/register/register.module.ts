import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register.component';

const registerRoutes: Routes = [
  {
    path: '', component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
})

export class RegisterModule { }
