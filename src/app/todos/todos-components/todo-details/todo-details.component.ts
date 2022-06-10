import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {TodosService} from "../../todos-servisec/todos.service";
import {ITodo} from "../../../models/ITodo";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  too:ITodo

  constructor(private activatedRoute: ActivatedRoute,
              private todosService: TodosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>
    this.todosService.getTodo(id).subscribe(value => this.too = value))
  }

}
