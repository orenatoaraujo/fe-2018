import { Component, OnInit } from '@angular/core';
import { DadosDemograficosService } from '../services/dados-demograficos.service';

@Component({
  selector: 'app-dados-demograficos',
  templateUrl: './dados-demograficos.component.html',
  styleUrls: ['./dados-demograficos.component.css']
})
export class DadosDemograficosComponent implements OnInit {

  constructor(private dadosDemograficosService:DadosDemograficosService) {
    dadosDemograficosService.create({
      name: 'Cacete de agulha'
    });
  }

  ngOnInit() {
  }

}
