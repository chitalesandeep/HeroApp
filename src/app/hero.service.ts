import { Injectable } from '@angular/core';
import { Heroes } from "./moc-heroes";
import { MoviesList } from "./moc-heroes";
import {Observable, of} from "rxjs";
import { Hero } from './hero';
import { Movie } from "./movie";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList = Heroes;
  movieList = MoviesList;

  constructor() { }

  getHeroes():Observable<Hero[]>
  {
    return of(this.heroList);
  }

  getMovies():Observable<Movie[]>
  {
      return of(this.movieList);
  }
}
