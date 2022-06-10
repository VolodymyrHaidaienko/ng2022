import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostsService} from "./posts-services/posts.service";
import {PostComponent} from './posts-components/post/post/post.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details/post-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule {
}
