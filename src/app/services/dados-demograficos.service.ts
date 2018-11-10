import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class DadosDemograficosService extends DatabaseService {

  constructor() {
    super('dados-demograficos');
  }
}
