import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from "../movie-list/movie-list.component";

const movieRouter:Routes = [
  {path:'',component:MovieListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(movieRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
