import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../comments-services/comments.service";
import {IComments} from "../../../models/IComments";
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../../models/IComment";
import {NgForm} from "@angular/forms";
import {DataService} from "../../comments-services/data.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComments[]
  searchcomments: IComment = {}
  newCommentsArray: IComments[]
  storageComment:IComment

  constructor(private commentsService: CommentsService,
              private activatedRoute: ActivatedRoute,
              private dataService:DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentsData}) => this.comments = commentsData),
      this.dataService.storage.subscribe(value => this.storageComment=value)
  }


  searchComments(myForm: NgForm) {
    this.activatedRoute.data.subscribe(({commentsData}) => {
      const filterComments = this.commentsService.filtercomment(commentsData, myForm.value)
      this.newCommentsArray = filterComments

    })
  }
}
