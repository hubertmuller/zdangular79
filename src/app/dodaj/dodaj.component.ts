import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListaService, Szczepionka} from '../lista.service';

class NaszWalidator {
  static wymaganyWiek(dolna: number, gorna: number): any {
    return (control: FormControl) => {
      const wartosc = control.value;
      const biezacaData = new Date();
      const wiek = biezacaData.getFullYear() - wartosc;
      if (wiek >= dolna && wiek <= gorna) {
        return null;
      } else {
        return {
          niepoprawnywiek: 'Wiek nie miesci sie w przedziale od ' + dolna + ' do ' + gorna + ' lat'
        };
      }
    };
  }
}

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DodajComponent {

  public forma: FormGroup = new FormGroup( {
      nazwa: new FormControl('',
      {validators: [, Validators.minLength(2), Validators.maxLength(50), Validators.required], updateOn: 'blur'}),
      cena: new FormControl('',
        {validators: [Validators.min(1), Validators.max(100), Validators.required], updateOn: 'change'}),
      waluta: new FormControl(null,
{validators: [Validators.required], updateOn: 'change'}),
      kraj: new FormControl(null,
        {validators: [Validators.required], updateOn: 'change'}),
      rok: new FormControl('',
        {validators: [NaszWalidator.wymaganyWiek(0, 30)], updateOn: 'change'}),
    }
    );

  public zapisano = false;

  constructor(private listaService: ListaService) {

  }

  public zapisz(): void {
    if (this.forma.valid) {
      const stanFormy = this.forma.controls;

      const szczepionka: Szczepionka = {
        nazwa: stanFormy.nazwa.value,
        cena: stanFormy.cena.value,
        waluta: stanFormy.waluta.value,
        kraj: stanFormy.kraj.value,
      };

      this.listaService.dodajElement(szczepionka).subscribe(
        () => {
          console.log('Zapisano osobe');
          this.zapisano = true;
        }
      );
    }
  }

}
