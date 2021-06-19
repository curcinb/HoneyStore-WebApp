import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { porudzbina } from 'src/app/modeli/porudzbina.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';
import { PorudzbinaService } from 'src/app/servisi/porudzbina/porudzbina.service';
import { ProizvodService } from 'src/app/servisi/proizvod/proizvod.service';

@Component({
  selector: 'app-porudzbine',
  templateUrl: './porudzbine.component.html',
  styleUrls: ['./porudzbine.component.css']
})
export class PorudzbineComponent implements OnInit {

  svePorudzbine: porudzbina[];

  constructor(private router: Router, private porudzbinaServis: PorudzbinaService, private korisnikServis: KorisnikService) {
    this.dohvatiSvePorudzbine();
  }

  ngOnInit(): void {
    localStorage.removeItem('proizvodDetaljnije');
  }

  dohvatiSvePorudzbine() {
    this.porudzbinaServis.dohvatiSvePorudzbine().subscribe(data => {
      this.svePorudzbine = JSON.parse(JSON.stringify(data));

      if (this.svePorudzbine.length == 0) {
        this.svePorudzbine = null;
      }
    });
  }

  pregledPorudzbine(id: number) {
    for(let i=0; i<this.svePorudzbine.length; i++){
      if(this.svePorudzbine[i].idPorudzbina == id){
        localStorage.setItem("porudzbinaDetaljnije", JSON.stringify(this.svePorudzbine[i]));
        break;
      }
    }
  }
}
