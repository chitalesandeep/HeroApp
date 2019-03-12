import { Component, OnInit, ViewChild} from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroInformationComponent } from "../hero-information/hero-information.component";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  @ViewChild(HeroInformationComponent) heroInfo:HeroInformationComponent;

  selected:boolean = false;
  heroes:Hero[];
  selecHeroId:Number;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
    this.HeroDetail();
  }

  getTopHeroes()
  {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

  HeroDetail()
  {
    this.heroInfo.getHeroes();
  }

  HeroMovieDetail(heroID:number)
  {
    //alert("heroID--"+heroID);
    this.selected = true;
    this.heroInfo.getHeroDetails(heroID);
  }
  
}

