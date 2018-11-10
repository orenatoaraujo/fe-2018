import { Component, OnInit } from '@angular/core';
import { Sexo } from '../sexo.enum';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dados-demograficos',
  templateUrl: './dados-demograficos.component.html',
  styleUrls: ['./dados-demograficos.component.css']
})
export class DadosDemograficosComponent implements OnInit {

  constructor(private database:DatabaseService) {
    
  }

  ngOnInit() {
  }

}
