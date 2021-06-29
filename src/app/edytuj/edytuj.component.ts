import {Component, OnDestroy, OnInit} from '@angular/core';
import {DodajComponent} from '../dodaj/dodaj.component';
import {ListaService, Szczepionka} from '../lista.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edytuj',
  templateUrl: './../dodaj/dodaj.component.html',
  styleUrls: ['./../dodaj/dodaj.component.scss']
})
export class EdytujComponent extends DodajComponent implements OnInit, OnDestroy {

  public editmode = true;

  ngOnInit(): void {
    console.log('ngoninit');
    this.listaService.pobierzElement(this.params.id).subscribe(
      (szczepionka: Szczepionka) => {
          this.forma.addControl('id', new FormControl(null));
          this.forma.setValue(szczepionka);
      }
    );
  }

  ngOnDestroy(): void {
    console.log('ngondestroy');
  }

  zapisz(): void {
    //tutaj robimy request zapisujacy edytowana szczepionke
  }

}
