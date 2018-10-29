import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoListaComponent } from './comunicacao-lista.component';

describe('ComunicacaoListaComponent', () => {
  let component: ComunicacaoListaComponent;
  let fixture: ComponentFixture<ComunicacaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
