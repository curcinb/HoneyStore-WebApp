import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { korisnik } from 'src/app/modeli/korisnik.model';
import { proizvod } from 'src/app/modeli/proizvod.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';
import { ProizvodService } from 'src/app/servisi/proizvod/proizvod.service';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {

  proizvod: proizvod;
  kupac: korisnik;
  prodavac : korisnik;

  constructor(private router: Router, private proizvodServis: ProizvodService, private korisnikServis: KorisnikService) { }

  ngOnInit() {
    if (localStorage.getItem('proizvodDetaljnije')) {
      this.proizvod = JSON.parse(localStorage.getItem('proizvodDetaljnije'));
    }
    else {
      this.router.navigate(['/pocetna']);
    }
    if (localStorage.getItem('kupac')) {
      this.kupac = JSON.parse(localStorage.getItem('kupac'));
    }
    if (localStorage.getItem('prodavac')) {
      this.prodavac = JSON.parse(localStorage.getItem('prodavac'));
    }
  }

  kolicina: number = 1;

  dodajUKorpu() {
    this.proizvod.porucenaKolicina = this.kolicina;
    let proizvodiKorpa: proizvod[] = null;
    if (JSON.parse(localStorage.getItem('proizvodiKorpa')) != null) {
      proizvodiKorpa = JSON.parse(localStorage.getItem('proizvodiKorpa'));
      for (let i = 0; i < proizvodiKorpa.length; i++) {
        if (this.proizvod.idProizvod == proizvodiKorpa[i].idProizvod) {
          proizvodiKorpa[i].porucenaKolicina += this.kolicina;
        }
      }
    }
    else {
      proizvodiKorpa = new Array();
    }
    proizvodiKorpa.push(this.proizvod);
    localStorage.setItem('proizvodiKorpa', JSON.stringify(proizvodiKorpa));
    alert("Uspešno ste dodali proizvod u korpu!");
  }
}
