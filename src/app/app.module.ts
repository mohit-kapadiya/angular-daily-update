import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { HomeComponent } from './home/home.component';
import { NgmodelChangeComponent } from './ngmodel-change/ngmodel-change.component';
import { PipeExampleComponent } from './pipe/pipe-example/pipe-example.component';
import { TempPipe } from './pipe/custom-pipe/temp.pipe';
import { AsyncPipeComponent } from './pipe/async-pipe/async-pipe/async-pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { KeyValuePipeComponent } from './pipe/key-value-pipe/key-value-pipe/key-value-pipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgmodelChangeComponent,
    PipeExampleComponent,
    TempPipe,
    AsyncPipeComponent,
    KeyValuePipeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
