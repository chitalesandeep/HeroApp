import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../hero.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movielist:any;
  likes:number;
  Dislikes:number;

  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies()
  {
    this.heroservice.getMovies().subscribe(data =>this.movielist = data);
  }

  votecalculation(agreed:boolean,id:number)
  {
    agreed ? this.movielist[id-1]['Likes']++ : this.movielist[id-1]['Dislikes']++;
  }

}
