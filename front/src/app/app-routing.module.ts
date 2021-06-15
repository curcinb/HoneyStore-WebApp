import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorpaComponent } from './komponente/korpa/korpa.component';
import { LoginComponent } from './komponente/login/login.component';
import { NoviproizvodComponent } from './komponente/noviproizvod/noviproizvod.component';
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
  {path: 'noviproizvod', component: NoviproizvodComponent},
  {path: 'pocetna', component: PocetnaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
