import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetaljiPorudzbineComponent } from './komponente/detalji-porudzbine/detalji-porudzbine.component';
import { KorpaComponent } from './komponente/korpa/korpa.component';
import { LoginComponent } from './komponente/login/login.component';
import { PocetnaComponent } from './komponente/pocetna/pocetna.component';
import { PorudzbineComponent } from './komponente/porudzbine/porudzbine.component';
import { ProfilComponent } from './komponente/profil/profil.component';
import { ProizvodComponent } from './komponente/proizvod/proizvod.component';

const routes: Routes = [
  {path: '', component: PocetnaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'korpa', component: KorpaComponent},
  {path: 'proizvod', component: ProizvodComponent},
  {path: 'porudzbine', component: PorudzbineComponent},
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'detaljiPorudzbine', component: DetaljiPorudzbineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
