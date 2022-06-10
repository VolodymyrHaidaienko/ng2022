import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import {CommentsService} from "./comments-services/comments.service";
import { CommentComponent } from './comments-components/comment/comment.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import {CommentsResolver} from "./comments-services/resolvers/comments.resolver";
import {CommentChildResolver} from "./comments-services/resolvers/comment-child.resolver";
import {CommentsGuard} from "./comments-services/guards/comments.guard";
import {FormsModule} from "@angular/forms";





@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
    imports: [
        CommonModule,
        CommentsRoutingModule,
        FormsModule
    ],
  providers:[
    CommentsService,CommentsResolver, CommentChildResolver, CommentsGuard
  ]
})
export class CommentsModule { }
