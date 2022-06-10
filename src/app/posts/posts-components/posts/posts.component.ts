import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../posts-services/posts.service";
import {IPosts} from "../../../models/IPosts";
import {IPost} from "../../../models/IPost";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[]
  searchPosts: IPost = {}
  newPosts: IPosts[]
  postcheck: IPost

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value)
  }


  searchPost(): void {
    this.newPosts = this.postsService.filterPost(this.posts, this.searchPosts)

  }

  postEmitter(post: IPost) {
    this.postcheck = post
  }
}
