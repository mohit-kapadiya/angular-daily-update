import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgmodelChangeComponent } from './ngmodel-change/ngmodel-change.component';

const routes: Routes = [
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  {
    path :'home',
    component:HomeComponent
  },
  {
    path :'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path :'change-event-example',
    component : NgmodelChangeComponent
  },
  {
    path: 'directive',
    loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule)
  },
  {
    path :'pipe',
    loadChildren: () => import('./pipe/pipe/pipe.module').then(m => m.PipeModule)
  },
  {
    path :'component-communication',
    loadChildren: () => import('./component-communication/component-communication.module').then(m => m.ComponentCommunicationModule)
  },
  {
    path :'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.AngularFormsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
