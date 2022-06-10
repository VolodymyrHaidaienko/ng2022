import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "./posts-components/post/post/post.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details/post-details.component";

const routes: Routes = [
  {path: '', component: PostsComponent,
  children:[
    {path:':id', component: PostDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
