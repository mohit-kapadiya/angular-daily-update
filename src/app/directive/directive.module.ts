import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { FormsModule } from '@angular/forms';
import { TtclassDirective } from './custom-directive/ttclass.directive';
import { AttrDirective } from './custom-directive/attr.directive';

@NgModule({
  declarations: [
    DirectiveExampleComponent,
    TtclassDirective,
    AttrDirective,
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
    FormsModule
  ]
})
export class DirectiveModule { }
