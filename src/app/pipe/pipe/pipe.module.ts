import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipeRoutingModule
  ],
  providers:[
    DatePipe
  ]
})
export class PipeModule { }
