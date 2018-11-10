import { ComunicacaoService } from './../services/comunicacao.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comunicacao } from '../domain/comunicacao.model';

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

  public comunicacaoSelecionada: Comunicacao;

  constructor(
    private comunicacaoService: ComunicacaoService
  ) {}

  ngOnInit(): void {
    this.findComunicacoes();
  }

  findComunicacoes() {
    this.comunicacoes = this.comunicacaoService.findAll();
  }

  onDelete(comunicacao: Comunicacao) {
    this.comunicacaoService.delete(comunicacao.id);
    this.findComunicacoes();
    this.onEdit(null);
  }


  onEdit(comunicacao: Comunicacao) {
    this.comunicacaoSelecionada = { ...comunicacao };
  }

}