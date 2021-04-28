import { Component, OnInit } from '@angular/core';
import {ListaClimasBioBio} from '../interfaces/climaBioBio';

@Component({
  selector: 'app-biobio',
  templateUrl: './biobio.component.html',
  styleUrls: ['./biobio.component.scss']
})
export class BiobioComponent implements OnInit {
  Lista=ListaClimasBioBio;
  constructor() { }

  ngOnInit(): void {
  }

}
