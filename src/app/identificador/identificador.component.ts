import { Component, OnInit } from '@angular/core';

import { Identificador } from './identificador.model';

@Component({
  selector: 'app-identificador',
  templateUrl: './identificador.component.html',
  styleUrls: ['./identificador.component.css']
})
export class IdentificadorComponent implements OnInit {

  identificador: Identificador;

  constructor(
 
  ) {}

  ngOnInit(): void {
    this.identificador = new Identificador(
      null, null, null, null, null,
      null, null, null, null, null,
      null, null, null, null, null);
  }

  onSubmit(): void {
    console.log('Inclusão de Identificador!');
  }

}