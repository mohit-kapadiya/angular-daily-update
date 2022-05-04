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
import { AsyncPipeComponent } from './pipe/async-pipe/async-pipe/async-pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { KeyValuePipeComponent } from './pipe/key-value-pipe/key-value-pipe/key-value-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgmodelChangeComponent,
    ParentComponent,
    ChildComponent,
    PipeExampleComponent,
    TempPipe,
    AsyncPipeComponent,
    KeyValuePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
