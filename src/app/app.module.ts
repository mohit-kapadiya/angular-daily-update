import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { HomeComponent } from './home/home.component';
import { NgmodelChangeComponent } from './ngmodel-change/ngmodel-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgmodelChangeComponent
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
