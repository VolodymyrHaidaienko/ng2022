import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./app-components/home/home.component";
let routes:Routes =[
  {path: '', component:HomeComponent},
  {path: 'users', loadChildren:() => import('./users/users.module').then(value => value.UsersModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(value => value.PostsModule)},
  {path: 'comments', loadChildren: () => import('./comments/comments.module').then(value => value.CommentsModule)},
  {path: 'todos', loadChildren: () => import('./todos/todos.module').then(value => value.TodosModule)},
  {path: '', loadChildren:(() => import('./cars/cars.module').then(value => value.CarsModule))}

]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule{}
