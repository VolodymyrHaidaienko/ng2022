import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPosts} from "../../../../models/IPosts";
import {IPost} from "../../../../models/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:IPosts

  @Output()
  checkPost = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  check():void {
    // @ts-ignore
    this.checkPost.emit<IPost>(this.post)
  }
}
