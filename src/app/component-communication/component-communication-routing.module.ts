import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentCounterComponent } from './counter/parent-counter/parent-counter.component';
import { ShopkeeperComponent } from './ngOnChanges/shopkeeper/shopkeeper.component';
import { SibParentComponent } from './no-parent-child-relationship/sib-parent/sib-parent.component';
import { ParentComponent } from './parent-child-relationship/parent/parent.component';
import { ViewChilChildComponent } from './view-child&view-children/view-children/view-chil-child/view-chil-child.component';
import { ViewChilParentComponent } from './view-child&view-children/view-children/view-chil-parent/view-chil-parent.component';
import { ViewcParentComponent } from './view-child&view-children/viewc-parent/viewc-parent.component';

const routes: Routes = [
  {
    path :'parent',
    component : ParentComponent
  },
  {
    path :'',
    redirectTo : 'parent',
    pathMatch:'full'

  },
  {
    path :'shop-keeper',
    component:ShopkeeperComponent
  },
  {
    path :'parent-counter',
    component : ParentCounterComponent
  },
  {
    path :'viewc-parent',
    component:ViewcParentComponent
  },
  {
    path :'view-chill-parent',
    component:ViewChilParentComponent
  },
  {
    path :'sib-parent',
    component : SibParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationRoutingModule { }
