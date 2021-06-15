import { Component } from '@angular/core';
import { korisnik } from './modeli/korisnik.model';
import { KorisnikService } from './servisi/korisnik/korisnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProdavnicaMeda';

  korisnik: korisnik;

  constructor(private korisnikServis: KorisnikService) {}

  ngOnInit() {
    setTimeout(() => { this.ngOnInit() }, 50 * 1);
    if (localStorage.getItem("kupac")) {
      this.korisnik = JSON.parse(localStorage.getItem("kupac"));
    }
    else if (localStorage.getItem("prodavac")) {
      this.korisnik = JSON.parse(localStorage.getItem('prodavac'));
    }
  }

  logout() {
    this.korisnikServis.logout();
  }
}
