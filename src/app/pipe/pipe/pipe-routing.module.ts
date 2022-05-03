import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';

const routes: Routes = [
  {
    path :'pipe-example',
    component : PipeExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
