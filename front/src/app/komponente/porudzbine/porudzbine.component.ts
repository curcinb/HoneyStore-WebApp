import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porudzbine',
  templateUrl: './porudzbine.component.html',
  styleUrls: ['./porudzbine.component.css']
})
export class PorudzbineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('proizvodDetaljnije');
  }

}
