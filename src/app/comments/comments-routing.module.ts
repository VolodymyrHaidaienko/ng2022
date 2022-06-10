import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentsResolver} from "./comments-services/resolvers/comments.resolver";
import {CommentChildResolver} from "./comments-services/resolvers/comment-child.resolver";
import {CommentsGuard} from "./comments-services/guards/comments.guard";



const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canActivate: [CommentsGuard],
    canDeactivate: [CommentsGuard],
    children: [
      {
        path: ':id', component: CommentDetailsComponent,
        resolve: {childDetails: CommentChildResolver}

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
