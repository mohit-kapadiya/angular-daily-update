import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path :'angular-form',
    component : AngularFormComponent
  },{
    path :'',
    redirectTo:'angular-form',
    pathMatch:'full'
  },
  {
    path :'reactive-form',
    component : ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
