import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {FormularioComponent} from '../app/formulario/formulario.component';
import {MetropolitanaComponent} from '../app/metropolitana/metropolitana.component';
import {BiobioComponent} from '../app/biobio/biobio.component';
import {AraucaniaComponent} from '../app/araucania/araucania.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'formulario',component:FormularioComponent},
  {path: 'metropolitana',component:MetropolitanaComponent},
  {path: 'biobio', component:BiobioComponent},
  {path: 'araucania', component:AraucaniaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }