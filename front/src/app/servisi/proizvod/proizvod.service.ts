import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from 'src/app/modeli/korisnik.model';
import { proizvod } from 'src/app/modeli/proizvod.model';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  dohvatiSveProizvode() {
    const data = {}
    return this.http.post(`${this.uri}/dohvatiProizvode`, data);
  }

  dohvatiProizvod(idProizvod : number){
    const data = {
      idProizvod : idProizvod
    }
    return this.http.post(`${this.uri}/dohvatiProizvod`, data);
  }
  
  dohvatiSveProizvodePorudzbine(idPorudzbina : number){
    const data = {
      idPorudzbina : idPorudzbina
    }
    return this.http.post(`${this.uri}/dohvatiSveProizvodePorudzbine`, data);
  }

  dodajStavkeNaPorudzbinu(proizvodiKorpa : proizvod[], idPorudzbine: number){
    const data = {
      proizvodiKorpa : proizvodiKorpa,
      idPorudzbine : idPorudzbine
    }
    return this.http.post(`${this.uri}/dodajStavkeNaPorudzbinu`, data);
  }

  dodavanjeNovogProizvoda(noviProizvod : proizvod){
    const data = {
      noviProizvod : noviProizvod
    }
    return this.http.post(`${this.uri}/dodavanjeNovogProizvoda`, data);
  }
}
