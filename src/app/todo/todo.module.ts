import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {BeyondCardModule, BeyondMaterialModule, BeyondPageModule, BeyondProgressbarModule} from '@getbeyond/ng-beyond-js';
import {HttpClientModule} from '@angular/common/http';
import {TodoService} from './todo.service';
import {FormBuilder} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    BeyondPageModule,
    BeyondProgressbarModule,
    BeyondCardModule,
    BeyondMaterialModule,
    HttpClientModule,
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
  ],
  providers: [
    TodoService,
    FormBuilder,
  ]
})
export class TodoModule { }
