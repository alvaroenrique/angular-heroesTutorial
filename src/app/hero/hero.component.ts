import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroService} from '../services/hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroId: number;
  heroeSelec: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroId = parseInt(params['id'], 10);
      this.heroeSelec = this.heroService.getHeroById(this.heroId)[0];
    });
  }

}
