import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {TodosesComponent} from "./todos-components/todoses/todoses.component";
import {TodoDetailsComponent} from "./todos-components/todo-details/todo-details.component";

const routes: Routes = [
  {path: '', component: TodosesComponent, children:[
      {path: ':id', component: TodoDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
