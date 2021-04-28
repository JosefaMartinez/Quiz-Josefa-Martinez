import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MetropolitanaComponent } from './metropolitana/metropolitana.component';
import { BiobioComponent } from './biobio/biobio.component';
import { AraucaniaComponent } from './araucania/araucania.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    ListaComponent,
    HeaderComponent,
    MetropolitanaComponent,
    BiobioComponent,
    AraucaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }