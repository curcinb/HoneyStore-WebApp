import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { korisnik } from 'src/app/modeli/korisnik.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  korime: string;
  lozinka: string;
  poruka: string;
  korisnik: korisnik;

  constructor(private router: Router, private korisnikServis: KorisnikService) {
    this.korime = "";
    this.lozinka = "";
    this.poruka = "";
  }

  ngOnInit() {
    localStorage.removeItem('proizvodDetaljnije');
    if (localStorage.getItem('prodavac')) {
      this.korisnik = JSON.parse(localStorage.getItem('prodavac'));
      this.router.navigate(['/profil']);
    }
    else if (localStorage.getItem('kupac')) {
      this.korisnik = JSON.parse(localStorage.getItem('kupac'));
      this.router.navigate(['/profil']);
    }
  }

  login() {
    this.korisnikServis.login(this.korime, this.lozinka).subscribe((korisnik: korisnik) => {
      if (korisnik[0]) {
        if (korisnik[0].privilegovani == 1) {
          localStorage.setItem('prodavac', JSON.stringify(korisnik[0]));
          this.router.navigate(['/profil']);
        }
        else {
          localStorage.setItem('kupac', JSON.stringify(korisnik[0]));
          this.router.navigate(['/profil']);
        }
      }
      else {
        this.poruka = "Nepostojeći korisnik!";
      }
    });
  }

  logout() {
    this.korisnikServis.logout();
  }
}
