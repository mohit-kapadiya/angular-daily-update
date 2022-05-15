import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ParentComponent } from './parent-child-relationship/parent/parent.component';
import { ChildComponent } from './parent-child-relationship/child/child.component';
import { ShopkeeperComponent } from './ngOnChanges/shopkeeper/shopkeeper.component';
import { CustomerComponent } from './ngOnChanges/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentCounterComponent } from './counter/parent-counter/parent-counter.component';
import { ChildCounterComponent } from './counter/child-counter/child-counter.component';
import { ViewcParentComponent } from './view-child&view-children/viewc-parent/viewc-parent.component';
import { ViewcChildComponent } from './view-child&view-children/viewc-child/viewc-child.component';
import { ViewChilParentComponent } from './view-child&view-children/view-children/view-chil-parent/view-chil-parent.component';
import { ViewChilChildComponent } from './view-child&view-children/view-children/view-chil-child/view-chil-child.component';
import { SibParentComponent } from './no-parent-child-relationship/sib-parent/sib-parent.component';
import { SibChild1Component } from './no-parent-child-relationship/sib-child1/sib-child1.component';
import { SibChild2Component } from './no-parent-child-relationship/sib-child2/sib-child2.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ShopkeeperComponent,
    CustomerComponent,
    ParentCounterComponent,
    ChildCounterComponent,
    ViewcParentComponent,
    ViewcChildComponent,
    ViewChilParentComponent,
    ViewChilChildComponent,
    SibParentComponent,
    SibChild1Component,
    SibChild2Component
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ChildComponent,
    CustomerComponent
  ]
})
export class ComponentCommunicationModule { }
