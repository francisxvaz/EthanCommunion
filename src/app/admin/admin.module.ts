import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent]
})
export class AdminModule { }
