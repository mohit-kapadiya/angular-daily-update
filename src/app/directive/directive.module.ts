import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DirectiveExampleComponent,
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
    FormsModule
  ]
})
export class DirectiveModule { }
