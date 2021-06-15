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

  korisnik : korisnik = null;
  sviProizvodi : proizvod [] = null;

  constructor(private router: Router, private proizvodServis : ProizvodService, private korisnikServis: KorisnikService) { 
    this.dohvatiProizvode();
  }

  ngOnInit(){
    localStorage.removeItem('proizvodDetaljnije');
    if (localStorage.getItem('prodavac')) {
      this.korisnik = JSON.parse(localStorage.getItem('prodavac'));
    }
    else if (localStorage.getItem('kupac')) {
      this.korisnik = JSON.parse(localStorage.getItem('kupac'));
    }
  }

  dohvatiProizvode(){
    this.proizvodServis.dohvatiProizvode().subscribe(data => {
      this.sviProizvodi = JSON.parse(JSON.stringify(data));
      if (this.sviProizvodi.length == 0) {
        this.sviProizvodi = null;
      }
    });
  }

  proizvodRedirekcija(id : number){
    for(let i=0; i<this.sviProizvodi.length; i++){
      if(this.sviProizvodi[i].idproizvod == id){
        localStorage.setItem('proizvodDetaljnije', JSON.stringify(this.sviProizvodi[i]));
      }
    }
  }
}
