import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroComponent } from '../hero/hero.component';
import { PaisesComponent } from '../paises/paises.component';

const rutas: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'paises', component: PaisesComponent},
  {path: 'heroe/:id', component: HeroComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class RoutingModule { }
