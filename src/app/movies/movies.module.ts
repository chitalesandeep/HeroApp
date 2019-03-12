import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from "./movies-routing/movies-routing.module";
import { MovieListComponent } from './movie-list/movie-list.component';
import { VoterComponent } from "./voter/voter.component";

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [MovieListComponent,VoterComponent]
})
export class MoviesModule { }
