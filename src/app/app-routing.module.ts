import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import {DodajComponent} from './dodaj/dodaj.component';
import {EdytujComponent} from './edytuj/edytuj.component';
import {UsunComponent} from './usun/usun.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent},
  { path: 'dodaj', component: DodajComponent},
  { path: 'edytuj', component: EdytujComponent},
  { path: 'usun', component: UsunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
