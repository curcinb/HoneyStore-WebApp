import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noviproizvod',
  templateUrl: './noviproizvod.component.html',
  styleUrls: ['./noviproizvod.component.css']
})
export class NoviproizvodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('proizvodDetaljnije');
  }

}
