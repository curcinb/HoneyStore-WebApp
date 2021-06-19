import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './komponente/login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PocetnaComponent } from './komponente/pocetna/pocetna.component';
import { ProfilComponent } from './komponente/profil/profil.component';
import { KorpaComponent } from './komponente/korpa/korpa.component';
import { ProizvodComponent } from './komponente/proizvod/proizvod.component';
import { PorudzbineComponent } from './komponente/porudzbine/porudzbine.component';
import { DetaljiPorudzbineComponent } from './komponente/detalji-porudzbine/detalji-porudzbine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PocetnaComponent,
    ProfilComponent,
    KorpaComponent,
    ProizvodComponent,
    PorudzbineComponent,
    DetaljiPorudzbineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
