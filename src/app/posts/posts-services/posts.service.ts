import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../../models/IPosts";
import {IPost} from "../../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _urlPosts = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpPosts: HttpClient) { }

  getPosts (): Observable<IPosts[]>{
    return this.httpPosts.get<IPosts[]>(this._urlPosts)
  }
  getPost(id: string): Observable<IPost>{
    return this.httpPosts.get<IPost>(this._urlPosts + '/' + id)
  }
  filterPost(posts:IPosts[],searchPosts: any): IPosts[]{
    return posts.filter(value => value.title?.toLowerCase().includes(searchPosts.title.toLowerCase()))
  }


}


