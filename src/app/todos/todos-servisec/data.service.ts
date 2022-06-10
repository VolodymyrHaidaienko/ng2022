import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ITodo} from "../../models/ITodo";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<ITodo>({id:0,title:'',completed:''})

  constructor() { }
}
