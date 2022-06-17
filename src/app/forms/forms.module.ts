import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SetTemplateDrivenComponent } from './angular-form/set-template-driven/set-template-driven.component';
import { SetTemplateByRefComponent } from './angular-form/set-template-by-ref/set-template-by-ref.component';


@NgModule({
  declarations: [
    AngularFormComponent,
    ReactiveFormComponent,
    SetTemplateDrivenComponent,
    SetTemplateByRefComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AngularFormsModule { }
