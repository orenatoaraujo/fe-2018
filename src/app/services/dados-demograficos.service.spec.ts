import { TestBed, inject } from '@angular/core/testing';

import { DadosDemograficosService } from './dados-demograficos.service';

describe('DadosDemograficosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosDemograficosService]
    });
  });

  it('should be created', inject([DadosDemograficosService], (service: DadosDemograficosService) => {
    expect(service).toBeTruthy();
  }));
});
