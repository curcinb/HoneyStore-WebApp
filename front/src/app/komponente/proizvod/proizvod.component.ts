import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proizvod } from 'src/app/modeli/proizvod.model';
import { KorisnikService } from 'src/app/servisi/korisnik/korisnik.service';
import { ProizvodService } from 'src/app/servisi/proizvod/proizvod.service';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {

  proizvod : proizvod;

  constructor(private router: Router, private proizvodServis : ProizvodService, private korisnikServis: KorisnikService) { }

  ngOnInit(){
    if (localStorage.getItem('proizvodDetaljnije')) {
      this.proizvod = JSON.parse(localStorage.getItem('proizvodDetaljnije'));
    }
    else{
      this.router.navigate(['/pocetna']);
    }
  }

  proba(){
    
  }
}
