import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../../models/IComments";
import {IComment} from "../../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private _urlComments = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpComments: HttpClient) { }

  getComments(): Observable<IComments[]>{
    return this.httpComments.get<IComments[]>(this._urlComments)
  }

  getComment(id: string): Observable<IComment>{
    return this.httpComments.get<IComment>(this._urlComments + '/' + id)
  }

  filtercomment(comments:IComments[], searchcomments:any):IComments[]{
    return comments.filter(value => value.name?.toLowerCase().includes(searchcomments.name.toLowerCase()))
  }
}
