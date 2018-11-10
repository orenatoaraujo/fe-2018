import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService extends DatabaseService {

  constructor() {
    super('comunicacao');
   }

}
