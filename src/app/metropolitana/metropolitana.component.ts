import { Component, OnInit } from '@angular/core';
import {ListaClimasMetropolitana} from '../interfaces/climaMetropolitana';

@Component({
  selector: 'app-metropolitana',
  templateUrl: './metropolitana.component.html',
  styleUrls: ['./metropolitana.component.scss']
})
export class MetropolitanaComponent implements OnInit {
  ListaClima=ListaClimasMetropolitana;
  constructor() { }

  ngOnInit(): void {
  }

}
