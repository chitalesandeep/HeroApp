import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { Heroes } from "../moc-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any;

  selectedHero: Hero;
  selectedHeroId: number = 0;
  newcolor:string = 'red';
  visibleForm:boolean = false;
  
  constructor(private herolist:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  OnSelect(hero:Hero):void
  {
      this.selectedHero = hero;
      this.selectedHeroId = hero.id;
  }

  SetColor($event):void
  {
    this.newcolor =  $event.target.value;
  }

  getHeroes()
  {
    this.herolist.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
