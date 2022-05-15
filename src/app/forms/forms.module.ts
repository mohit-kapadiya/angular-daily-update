import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AngularFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AngularFormsModule { }
