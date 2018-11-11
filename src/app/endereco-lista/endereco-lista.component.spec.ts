import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoListaComponent } from './endereco-lista.component';

describe('EnderecoListaComponent', () => {
  let component: EnderecoListaComponent;
  let fixture: ComponentFixture<EnderecoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
