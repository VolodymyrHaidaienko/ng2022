import {Component, Input, OnInit} from '@angular/core';
import {IComments} from "../../../models/IComments";
import {DataService} from "../../comments-services/data.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComments

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  doStorage() {
    this.dataService.storage.next(this.comment)

  }
}
