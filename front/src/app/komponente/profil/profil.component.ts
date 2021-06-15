import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { korisnik } from 'src/app/modeli/korisnik.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  korisnik : korisnik = null;
  flegPromena: Boolean = false;

  constructor(private router : Router, private korisnikServis: KorisnikService) {
    if (localStorage.getItem('prodavac')) {
      this.korisnik = JSON.parse(localStorage.getItem('prodavac'));
    }
    else if (localStorage.getItem('kupac')) {
      this.korisnik = JSON.parse(localStorage.getItem('kupac'));
    }
    else{
      this.router.navigate(['/pocetna']);
    }
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

  izmeniPodatke() {
    this.flegPromena = !this.flegPromena;
    alert("Sada možete da promenite Vaše podatke!");
  }

  imePromena : string;
  prezimePromena : string;
  telefonPromena : string;
  adresaPromena : string;
  gradPromena : string;
  lozinka1Promena : string;
  lozinka2Promena : string;

  izmeniPodatkePotvrdi(){
    this.flegPromena = !this.flegPromena;

    let korisnikPromena : korisnik;
    korisnikPromena = new korisnik();

    korisnikPromena.ime = this.korisnik.ime;
    korisnikPromena.prezime = this.korisnik.prezime;
    korisnikPromena.korime = this.korisnik.korime;
    korisnikPromena.lozinka = this.korisnik.lozinka;

    if(this.telefonPromena != undefined){
      korisnikPromena.telefon = this.telefonPromena;
    }
    else{
      korisnikPromena.telefon = this.korisnik.telefon;
    }

    if(this.adresaPromena != undefined){
      korisnikPromena.adresa = this.adresaPromena;
    }
    else{
      korisnikPromena.adresa = this.korisnik.adresa;
    }
    
    if(this.gradPromena != undefined){
      korisnikPromena.grad = this.gradPromena;
    } 
    else{
      korisnikPromena.grad = this.korisnik.grad;
    }

    if(this.lozinka1Promena != undefined && this.lozinka2Promena != undefined){
      if((this.lozinka1Promena == this.lozinka2Promena) && this.lozinka1Promena != this.korisnik.lozinka){
        korisnikPromena.lozinka = this.lozinka1Promena; //Sve okej
      }
      //DODATI DA SE ISPISE PORUKA DA LOZINKA NE MOZE DA BUDE ISTA KAO STARA
    }
    else{
      korisnikPromena.lozinka = this.korisnik.lozinka;
    }

    this.korisnikServis.izmenaKorisnika(korisnikPromena).subscribe(data => {
      this.korisnik = korisnikPromena;
      if(this.korisnik.privilegovani == 1) localStorage.setItem('prodavac', JSON.stringify(this.korisnik));
      else localStorage.setItem('kupac', JSON.stringify(this.korisnik));
    })
  }
}
