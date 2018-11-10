import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeListaComponent } from './nome-lista.component';

describe('NomeListaComponent', () => {
  let component: NomeListaComponent;
  let fixture: ComponentFixture<NomeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
