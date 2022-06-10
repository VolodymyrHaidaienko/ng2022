import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodos} from "../../models/ITodos";
import {ITodo} from "../../models/ITodo";


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _urlTodos = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private httpTodos: HttpClient) { }

  getTodos(): Observable<ITodos[]>{
    return this.httpTodos.get<ITodos[]>(this._urlTodos)
  }

  getTodo(id:string): Observable<ITodo>{
    return this.httpTodos.get<ITodo>(this._urlTodos + '/' + id )
  }

  filterTodo(todos:ITodos[],todoSearch:any):ITodos[]{
    return todos.filter(value => value.title?.toLowerCase().includes(todoSearch.title.toLowerCase()))

  }

}
