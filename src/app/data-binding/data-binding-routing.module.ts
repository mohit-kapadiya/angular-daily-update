import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path:'one-way-binding',
    component:OneWayBindingComponent
  },
  {
    path:'two-way-binding',
    component:TwoWayBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
