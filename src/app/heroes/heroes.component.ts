import { Component, OnInit } from '@angular/core';
import {HeroService} from '../services/hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroservice: HeroService) {  }

  ngOnInit() {
    this.heroes = this.heroservice.getHeroes();
  }

}
