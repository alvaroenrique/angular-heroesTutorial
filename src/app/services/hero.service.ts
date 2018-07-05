import { Injectable } from '@angular/core';
import {Hero} from '../hero';
import {ListaHeroes} from '../lista-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = ListaHeroes;

  constructor() {
    console.log('servicio listo');
  }

  getHeroes() {
    return this.heroes;
  }
  getHeroById(id) {
    return this.heroes.filter( hero => hero.id === id );
  }
}
