import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { korisnik } from 'src/app/modeli/korisnik.model';
import { proizvod } from 'src/app/modeli/proizvod.model';
import { PorudzbinaService } from 'src/app/servisi/porudzbina/porudzbina.service';
import { ProizvodService } from 'src/app/servisi/proizvod/proizvod.service';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  proizvodiKorpa: proizvod[] = null;
  ukupnaCena: number = 0;
  kupac: korisnik;

  constructor(private router: Router, private proizvodServis: ProizvodService, private porudzbinaServis : PorudzbinaService) { }

  ngOnInit() {
    localStorage.removeItem('proizvodDetaljnije');
    
    if (localStorage.getItem('kupac')) {
      this.kupac = JSON.parse(localStorage.getItem('kupac'));
    }
    
    if (JSON.parse(localStorage.getItem('proizvodiKorpa')) != null) {
      this.proizvodiKorpa = JSON.parse(localStorage.getItem('proizvodiKorpa'));

      for (let i = 0; i < this.proizvodiKorpa.length; i++) {
        this.ukupnaCena += (this.proizvodiKorpa[i].porucenaKolicina * this.proizvodiKorpa[i].cena);
      }
    }
  }

  obrisiProizvodIzKorpe(id: number) {
    let proizvodBrisanje;

    for (let i = 0; i < this.proizvodiKorpa.length; i++) {
      if (this.proizvodiKorpa[i].idProizvod == id) {
        proizvodBrisanje = this.proizvodiKorpa[i];
        this.ukupnaCena -= (this.proizvodiKorpa[i].porucenaKolicina * this.proizvodiKorpa[i].cena);
        break;
      }
    }

    let ind = this.proizvodiKorpa.indexOf(proizvodBrisanje, 0);
    if (ind > -1) {
      this.proizvodiKorpa.splice(ind, 1);
      localStorage.setItem('proizvodiKorpa', JSON.stringify(this.proizvodiKorpa));
    }

    if (this.proizvodiKorpa.length == 0) {
      localStorage.removeItem("proizvodiKorpa");
      location.reload();
    }
  }

  promenaCene() {
    localStorage.setItem('proizvodiKorpa', JSON.stringify(this.proizvodiKorpa));

    this.ukupnaCena = 0;
    for (let i = 0; i < this.proizvodiKorpa.length; i++) {
      this.ukupnaCena += (this.proizvodiKorpa[i].porucenaKolicina * this.proizvodiKorpa[i].cena);
    }
  }

  idPoslednjePorudzbine: number;
  izvrsiPorudzbinu() {
    window.alert("Uspesno ste izvršili porudžbinu!");

    this.porudzbinaServis.kreirajPorudzbinu(this.ukupnaCena, this.kupac).subscribe(() => { });
    this.porudzbinaServis.dohvatiIdPoslednjePorudzbine().subscribe((idPoslednjePorudzbine: number) => {
      let id = Number(JSON.stringify(idPoslednjePorudzbine[0].idPorudzbina));
      this.proizvodServis.dodajStavkeNaPorudzbinu(this.proizvodiKorpa, id).subscribe(() => { });
    });
    localStorage.removeItem("proizvodiKorpa");
    this.router.navigate(['/pocetna']);
  }
}
