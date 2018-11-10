import { Component, OnInit } from '@angular/core';
import { DadosDemograficosService } from '../services/dados-demograficos.service';
import { DadosDemograficos } from '../domain/dados-demograficos';
import { Sexo } from '../enum/sexo.enum';

@Component({
  selector: 'app-dados-demograficos',
  templateUrl: './dados-demograficos.component.html',
  styleUrls: ['./dados-demograficos.component.css']
})
export class DadosDemograficosComponent implements OnInit {

  public sexoMasculino:Sexo = Sexo.MASCULINO;
  public sexoFeminino:Sexo = Sexo.FEMININO;
  public dadosDemograficos:DadosDemograficos;

  constructor(private dadosDemograficosService:DadosDemograficosService) {
    this.dadosDemograficos = new DadosDemograficos();
    console.log(this.sexoMasculino);
    console.log(this.sexoFeminino);
  }

  ngOnInit() {
  }


}
