import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from 'src/app/modeli/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class PorudzbinaService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  kreirajPorudzbinu(ukupnaCena: number, kupac: korisnik) {
    const data = {
      ukupnaCena: ukupnaCena,
      kupac: kupac
    }
    return this.http.post(`${this.uri}/kreirajPorudzbinu`, data);
  }

  dohvatiIdPoslednjePorudzbine() {
    const data = {}
    return this.http.post(`${this.uri}/dohvatiIdPoslednjePorudzbine`, data);
  }

  dohvatiSvePorudzbine() {
    const data = {}
    return this.http.post(`${this.uri}/dohvatiSvePorudzbine`, data);
  }

  prihvatiPorudzbinu(status: number, brojDana: number, idPorudzbina: number) {
    const data = {
      status: status,
      brojDana: brojDana,
      idPorudzbina: idPorudzbina
    }
    return this.http.post(`${this.uri}/prihvatiPorudzbinu`, data);
  }

  odbijPorudzbinu(status: number, idPorudzbina: number) {
    const data = {
      status: status,
      idPorudzbina: idPorudzbina
    }
    return this.http.post(`${this.uri}/odbijPorudzbinu`, data);
  }
}
