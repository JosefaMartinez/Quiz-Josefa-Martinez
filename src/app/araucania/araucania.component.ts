import { Component, OnInit } from '@angular/core';
import {ListaClimasAraucania} from '../interfaces/climaAraucania';

@Component({
  selector: 'app-araucania',
  templateUrl: './araucania.component.html',
  styleUrls: ['./araucania.component.scss']
})
export class AraucaniaComponent implements OnInit {
  Lista=ListaClimasAraucania;
  constructor() { }

  ngOnInit(): void {
  }

}
