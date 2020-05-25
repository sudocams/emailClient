import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [InputComponent, ModalComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ModalComponent
  ]
})
export class SharedModule { }
