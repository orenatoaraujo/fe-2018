import { Component, OnInit } from '@angular/core';
import { Sexo } from '../sexo.enum';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dados-demograficos',
  templateUrl: './dados-demograficos.component.html',
  styleUrls: ['./dados-demograficos.component.css']
})
export class DadosDemograficosComponent implements OnInit {

  constructor(private database:DatabaseService) {
    console.log(this.database.findById('test', 'a589c02a-7a45-4f8b-a59e-acfdad3e8d46'));
  }

  ngOnInit() {
  }

}
