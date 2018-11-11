import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorListaComponent } from './identificador-lista.component';

describe('IdentificadorListaComponent', () => {
  let component: IdentificadorListaComponent;
  let fixture: ComponentFixture<IdentificadorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificadorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificadorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
