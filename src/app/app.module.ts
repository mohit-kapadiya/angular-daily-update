import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { HomeComponent } from './home/home.component';
import { NgmodelChangeComponent } from './ngmodel-change/ngmodel-change.component';
import { ParentComponent } from './add-child-component/parent/parent.component';
import { ChildComponent } from './add-child-component/child/child.component';
import { PipeExampleComponent } from './pipe/pipe-example/pipe-example.component';
import { TempPipe } from './pipe/custom-pipe/temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgmodelChangeComponent,
    ParentComponent,
    ChildComponent,
    PipeExampleComponent,
    TempPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
