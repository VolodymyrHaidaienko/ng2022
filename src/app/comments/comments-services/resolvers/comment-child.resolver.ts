import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IComment} from "../../../models/IComment";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentChildResolver implements Resolve<IComment> {

  constructor(private commentsService: CommentsService) {
  }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
  // @ts-ignore
  return this.commentsService.getComment(route.paramMap.get('id'))
}
}
