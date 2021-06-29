import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodajComponent } from './dodaj/dodaj.component';
import {ListaComponent, PrzeliczPipe} from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { UsunComponent } from './usun/usun.component';
import { EdytujComponent } from './edytuj/edytuj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BladComponent } from './blad/blad.component';

@NgModule({
  declarations: [
    AppComponent,
    DodajComponent,
    ListaComponent,
    PrzeliczPipe,
    UsunComponent,
    EdytujComponent,
    BladComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
