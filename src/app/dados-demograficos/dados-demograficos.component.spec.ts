import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDemograficosComponent } from './dados-demograficos.component';

describe('DadosDemograficosComponent', () => {
  let component: DadosDemograficosComponent;
  let fixture: ComponentFixture<DadosDemograficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosDemograficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDemograficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
