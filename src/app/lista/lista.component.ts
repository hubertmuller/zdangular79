import { Component, OnInit } from '@angular/core';
import {ListaService, Szczepionka} from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public szczepionki: Szczepionka[];

  constructor(private listaService: ListaService) {
    listaService.pobierzListe().subscribe(
      (szczepionki: Szczepionka[]) => {
        this.szczepionki = szczepionki;
      }
    );
  }

  ngOnInit(): void {
  }

}
