import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeComponent } from '../async-pipe/async-pipe/async-pipe.component';
import { KeyValuePipeComponent } from '../key-value-pipe/key-value-pipe/key-value-pipe.component';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';

const routes: Routes = [
  {
    path :'pipe-example',
    component : PipeExampleComponent
  },
  {
    path : 'async-pipe',
    component : AsyncPipeComponent
  },
  {
    path :'key-value-pipe',
    component : KeyValuePipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
