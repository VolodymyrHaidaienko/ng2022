import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosesComponent } from './todos-components/todoses/todoses.component';
import {TodosService} from "./todos-servisec/todos.service";
import { TodoComponent } from './todos-components/todo/todo.component';
import { TodoDetailsComponent } from './todos-components/todo-details/todo-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodosesComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
    imports: [
        CommonModule,
        TodosRoutingModule,
        FormsModule
    ],
  providers:[
    TodosService
  ]
})
export class TodosModule { }
