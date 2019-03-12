import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.css']
})
export class HeroInformationComponent implements OnInit {
  filterId:number = 0;
  heroData:any[];
  movies:any[];

  constructor(private heroinfo:HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getMovies();
  }

  getHeroes()
  {
    this.heroinfo.getHeroes().subscribe(Data => this.heroData = Data);
  }

  getMovies()
  {
    this.heroinfo.getMovies().subscribe(movielist => this.movies = movielist);
  }

  getHeroDetails(hero_id:number)
  {
    this.filterId = hero_id;
  }
}
