import { Component, OnInit } from '@angular/core';
import {ListaClimasValparaiso} from '../interfaces/climaValparaiso';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /*Se cargan los datos, en un principio predeterminados*/
  Lista=ListaClimasValparaiso;
  constructor() { }

  ngOnInit(): void {
  }

}
