import { Component, OnInit } from '@angular/core';
import { DadosDemograficosService } from '../services/dados-demograficos.service';
import { DadosDemograficos } from '../domain/dados-demograficos';
import { Sexo } from '../enum/sexo.enum';
import { EventEmitter } from 'events';
import { SituacaoFamiliar } from '../enum/situacao-familiar.enum';

@Component({
  selector: 'app-dados-demograficos',
  templateUrl: './dados-demograficos.component.html',
  styleUrls: ['./dados-demograficos.component.css']
})
export class DadosDemograficosComponent implements OnInit {

  public sexoMasculino:Sexo = Sexo.MASCULINO;
  public sexoFeminino:Sexo = Sexo.FEMININO;
  
  public situacaoFamiliarList:any[] = [{
    id: 1,
    title: 'Solteiro'
  }, {
    id: 2,
    title: 'Casado'
  }, {
    id: 3,
    title: 'Divorsiado'
  }];

  public racaList:any[] = [{
    id: 1,
    title: 'Negro'
  }, {
    id: 2,
    title: 'Caucasiano'
  }, {
    id: 3,
    title: 'Indígena'
  }];

  public dadosDemograficos:DadosDemograficos;

  constructor(private dadosDemograficosService:DadosDemograficosService) {
    this.dadosDemograficos = new DadosDemograficos();
  }

  ngOnInit() {
  }

  save(dadosDemograficos:DadosDemograficos) {
    this.dadosDemograficosService.create(dadosDemograficos);
  }
}
