import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { korisnik } from 'src/app/modeli/korisnik.model';
import { proizvod } from 'src/app/modeli/proizvod.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';
import { ProizvodService } from 'src/app/servisi/proizvod/proizvod.service';
import { ProizvodComponent } from '../proizvod/proizvod.component';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  korisnik: korisnik = null;
  sviProizvodi: proizvod[] = null;

  constructor(private router: Router, private proizvodServis: ProizvodService, private korisnikServis: KorisnikService) {
    this.dohvatiSveProizvode();
  }

  ngOnInit() {
    localStorage.removeItem('proizvodDetaljnije');
    if (localStorage.getItem('prodavac')) {
      this.korisnik = JSON.parse(localStorage.getItem('prodavac'));
    }
    else if (localStorage.getItem('kupac')) {
      this.korisnik = JSON.parse(localStorage.getItem('kupac'));
    }
  }

  dohvatiSveProizvode() {
    this.proizvodServis.dohvatiSveProizvode().subscribe(data => {
      this.sviProizvodi = JSON.parse(JSON.stringify(data));
      if (this.sviProizvodi.length == 0) {
        this.sviProizvodi = null;
      }
    });
  }

  proizvodRedirekcija(id: number) {
    for (let i = 0; i < this.sviProizvodi.length; i++) {
      if (this.sviProizvodi[i].idProizvod == id) {
        localStorage.setItem('proizvodDetaljnije', JSON.stringify(this.sviProizvodi[i]));
      }
    }
  }

  ocistiFormu() {
    this.porukaNoviProizvod = null;
    (<HTMLInputElement>document.getElementById("nazivProizvod")).value = "";
    (<HTMLTextAreaElement>document.getElementById("opisProizvod")).value = "";
    (<HTMLTextAreaElement>document.getElementById("uputstvoZaProizvod")).value = "";
    (<HTMLInputElement>document.getElementById("cenaProizvod")).value = "";
    (<HTMLInputElement>document.getElementById("kolicinaProizvod")).value = "";
    //(<HTMLInputElement>document.getElementById("slikaProizvod")).value = "";
  }

  nazivProizvod: string;
  opisProizvod: string;
  uputstvoZaProizvod: string;
  cenaProizvod: number;
  kolicinaProizvod: number;
  slikaProizvod: string;
  porukaNoviProizvod: string;

  dodavanjeNovogProizvoda() {
    let noviProizvod: proizvod = new proizvod();

    if (this.nazivProizvod == undefined) {
      this.porukaNoviProizvod = "Niste uneli sve podatke!";
    }
    noviProizvod.naziv = this.nazivProizvod;

    if (this.opisProizvod == undefined) {
      this.porukaNoviProizvod = "Niste uneli sve podatke!";
    }
    noviProizvod.opis = this.opisProizvod;

    if (this.uputstvoZaProizvod == undefined) {
      this.porukaNoviProizvod = "Niste uneli sve podatke!";
    }
    noviProizvod.koriscenje = this.uputstvoZaProizvod;

    if (this.cenaProizvod == undefined) {
      this.porukaNoviProizvod = "Niste uneli sve podatke!";
    }
    noviProizvod.cena = this.cenaProizvod;

    if (this.kolicinaProizvod == undefined) {
      this.porukaNoviProizvod = "Niste uneli sve podatke!";
    }
    noviProizvod.dostupnaKolicina = this.kolicinaProizvod;

    if (this.slikaProizvod == undefined) {
      this.porukaNoviProizvod = "Niste uneli sve podatke!";
    }
    noviProizvod.slika = this.slikaProizvod;

    this.proizvodServis.dodavanjeNovogProizvoda(noviProizvod).subscribe(data => {
      this.sviProizvodi.unshift(noviProizvod);
    });
    this.porukaNoviProizvod = "Uspesno ste dodali novi proizvod!";
  }

}
