import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {CounterComponent} from "./counter/counter.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'toDoList', component: ToDoListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
