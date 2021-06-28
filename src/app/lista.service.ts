import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Szczepionka {
  nazwa: string;
  kraj: string;
  cena: number;
  waluta: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Accept', 'application/json');
  }

  pobierzListe(): Observable<Szczepionka[]> {
      console.log('wywolano pobierzListe');
      return this.http.get<Szczepionka[]>('http://localhost:3200/api/lista', { headers: this.headers});
  }
}
