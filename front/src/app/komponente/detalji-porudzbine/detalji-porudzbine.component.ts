import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { porudzbina } from 'src/app/modeli/porudzbina.model';
import { proizvod } from 'src/app/modeli/proizvod.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';
import { PorudzbinaService } from 'src/app/servisi/porudzbina/porudzbina.service';
import { ProizvodService } from 'src/app/servisi/proizvod/proizvod.service';

@Component({
  selector: 'app-detalji-porudzbine',
  templateUrl: './detalji-porudzbine.component.html',
  styleUrls: ['./detalji-porudzbine.component.css']
})
export class DetaljiPorudzbineComponent implements OnInit {

  porudzbina: porudzbina;
  proizvodiPorudzbina: proizvod[] = null;
  ukupnoProizvoda: number = 0;

  constructor(private router: Router, private proizvodServis: ProizvodService,
    private porudzbinaServis: PorudzbinaService, private korisnikServis: KorisnikService) { }

  ngOnInit() {
    localStorage.removeItem('proizvodDetaljnije');

    if (JSON.parse(localStorage.getItem('porudzbinaDetaljnije')) != null) {
      this.porudzbina = JSON.parse(localStorage.getItem('porudzbinaDetaljnije'));
      this.dohvatiSveProizvodePorudzbine(this.porudzbina.idPorudzbina);
    }
  }

  dohvatiSveProizvodePorudzbine(id: number) {
    this.proizvodServis.dohvatiSveProizvodePorudzbine(id).subscribe(data => {
      this.proizvodiPorudzbina = JSON.parse(JSON.stringify(data));

      if (this.proizvodiPorudzbina.length == 0) {
        this.proizvodiPorudzbina = null;
      }

      for (let i = 0; i < this.proizvodiPorudzbina.length; i++) {
        this.proizvodServis.dohvatiProizvod(this.proizvodiPorudzbina[i].idProizvod).subscribe(data => {
          let proizvodDetalji: proizvod;
          proizvodDetalji = JSON.parse(JSON.stringify(data[0]));

          this.proizvodiPorudzbina[i].naziv = proizvodDetalji.naziv;
          this.proizvodiPorudzbina[i].slika = proizvodDetalji.slika;
          this.proizvodiPorudzbina[i].cena = proizvodDetalji.cena;
          this.ukupnoProizvoda += this.proizvodiPorudzbina[i].kolicina;
        });
      }
    });
  }

  brojDana: number;
  obradiPorudzbinu(status: number) {
    if (status == 0) {
      console.log("ODBIJENO - 1!");
      console.log(status);
      console.log(this.porudzbina.idPorudzbina);
      this.porudzbinaServis.odbijPorudzbinu(status, this.porudzbina.idPorudzbina).subscribe(data => {});
    }
    else {
      console.log("PRIHVACENO - 2!");
      console.log(status);
      console.log(this.porudzbina.idPorudzbina);
      this.porudzbinaServis.prihvatiPorudzbinu(status, this.brojDana, this.porudzbina.idPorudzbina).subscribe(data => {});
    }
  }
}
