import { Component, OnInit } from '@angular/core';

import { Comunicacao } from './comunicacao.model';

@Component({
  selector: 'app-comunicacao-lista',
  templateUrl: './comunicacao-lista.component.html',
  styleUrls: ['./comunicacao-lista.component.css']
})
export class ComunicacaoListaComponent implements OnInit {

  comunicacoes: Comunicacao[] = [];
  mensagem: {};
  classesCss: {};
  private currentTimeout: any;

  constructor(
  ) {}

  ngOnInit(): void {
      
  }

}