import { TestBed, inject } from '@angular/core/testing';

import { ComunicacaoService } from './comunicacao.service';

describe('ComunicacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicacaoService]
    });
  });

  it('should be created', inject([ComunicacaoService], (service: ComunicacaoService) => {
    expect(service).toBeTruthy();
  }));
});
