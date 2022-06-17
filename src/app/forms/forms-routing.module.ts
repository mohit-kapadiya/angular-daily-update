import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { SetTemplateByRefComponent } from './angular-form/set-template-by-ref/set-template-by-ref.component';
import { SetTemplateDrivenComponent } from './angular-form/set-template-driven/set-template-driven.component';
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
    path :'set-form',
    component:SetTemplateDrivenComponent
  },
  {
    path :'set-form-ref',
    component: SetTemplateByRefComponent
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
