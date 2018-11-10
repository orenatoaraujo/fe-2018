import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { Comunicacao } from '../domain/comunicacao.model';
import { ComunicacaoService } from 'src/app/services/comunicacao.service';

@Component({
  selector: 'app-comunicacao',
  templateUrl: './comunicacao.component.html',
  styleUrls: ['./comunicacao.component.css']
})
export class ComunicacaoComponent implements OnInit {

  @Output() updateComunicacaoLista = new EventEmitter();
  @Input() comunicacao: Comunicacao;

  constructor(
    private comunicacaoService: ComunicacaoService
  ) {}

  ngOnInit() {
    this.comunicacao = new Comunicacao();
  }

  createOrUpdate(): void {
    this.comunicacaoService.createOrUpdate(this.comunicacao);
    this.updateComunicacaoLista.emit();
    this.comunicacao = new Comunicacao();
  }

}
