import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] 
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  selectedHero : Hero;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
