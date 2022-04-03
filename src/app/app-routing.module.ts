import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './add-child-component/parent/parent.component';
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
    path :'parent',
    component : ParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
