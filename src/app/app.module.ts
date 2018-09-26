import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBeyondModule } from '@getbeyond/ng-beyond-js';
import {AppRoutingModule} from './app-routing.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    NgBeyondModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
