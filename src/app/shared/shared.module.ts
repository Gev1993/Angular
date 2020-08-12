import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderedBoxDirective } from './directives/bordered-box.directive';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    BorderedBoxDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    BorderedBoxDirective
  ]
})
export class SharedModule { }
