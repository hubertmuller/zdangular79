import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DodajComponent {

  public forma: FormGroup = new FormGroup( {
      nazwa: new FormControl('test',
      {validators: [], updateOn: 'change'}),
      cena: new FormControl(2,
        {validators: [Validators.min(10), Validators.max(100)], updateOn: 'change'}),
      waluta: new FormControl(null,
{validators: [], updateOn: 'change'}),
      kraj: new FormControl(null,
        {validators: [], updateOn: 'change'}),
      }
    );
}
