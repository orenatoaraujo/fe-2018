import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome-lista',
  templateUrl: './nome-lista.component.html',
  styleUrls: ['./nome-lista.component.css']
})
export class NomeListaComponent implements OnInit {

  public nomes: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
