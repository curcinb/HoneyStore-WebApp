import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('proizvodDetaljnije');
  }

}
