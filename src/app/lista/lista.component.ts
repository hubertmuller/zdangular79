import {Component, OnInit, Pipe} from '@angular/core';
import {ListaService, Szczepionka} from '../lista.service';

@Pipe({
  name: 'przeliczwalute'
})
export class PrzeliczPipe {
  transform( ilosc: number): number {
  /* Rzeczywisty kurs moze
  zostac pobrany przez wywolanie serwisu
  */
    return ilosc * 3.8;
  }
}

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

  public przelicz (a: number): number {
    return a * 3.8;
  }

  ngOnInit(): void {
  }

}
