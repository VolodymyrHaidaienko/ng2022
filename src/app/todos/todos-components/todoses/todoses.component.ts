import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../todos-servisec/todos.service";
import {ITodos} from "../../../models/ITodos";
import {ITodo} from "../../../models/ITodo";
import {NgModel} from "@angular/forms";
import {DataService} from "../../todos-servisec/data.service";

@Component({
  selector: 'app-todoses',
  templateUrl: './todoses.component.html',
  styleUrls: ['./todoses.component.css']
})
export class TodosesComponent implements OnInit {

  todoses:ITodos[]

  todoSearch: ITodo = {}
  newTodos: ITodos[]
  todoStorage:ITodo



  constructor(private todosService: TodosService,
              private dataService:DataService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(value => this.todoses=value),
      this.dataService.storage.subscribe(value => this.todoStorage=value)
  }


  searchTodo():void {
    this.todosService.getTodos().subscribe(value => {
      const resultfilter=this.todosService.filterTodo(value,this.todoSearch)
      this.newTodos=resultfilter

    })
  }
}
