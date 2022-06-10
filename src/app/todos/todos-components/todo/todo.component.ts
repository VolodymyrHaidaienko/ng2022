import {Component, Input, OnInit} from '@angular/core';
import {ITodos} from "../../../models/ITodos";
import {DataService} from "../../todos-servisec/data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo:ITodos

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.dataService.storage.next(this.todo)

  }
}
