import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from 'src/app/modeli/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  
  uri = 'http://localhost:4000';

  korisnik : korisnik;

  constructor(private http: HttpClient) { }

  login(korime: String, lozinka: String) {
    const data = {
      korime: korime,
      lozinka: lozinka
    };
    return this.http.post(`${this.uri}/login`, data);
  }

  promenaLozinke(korime: String, lozinka: String) {
    const data = {
      korime: korime,
      lozinka: lozinka,
    }
    return this.http.post(`${this.uri}/promenaLozinke`, data);
  }

  izmenaKorisnika(korisnikPromena: korisnik) {
    const data = {
      korisnikPromena: korisnikPromena
    }
    return this.http.post(`${this.uri}/izmenaKorisnika`, data);
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
