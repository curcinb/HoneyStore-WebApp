import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  dohvatiProizvode() {
    const data = {}
    return this.http.post(`${this.uri}/dohvatiProizvode`, data);
  }
}
