import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuosListaComponent } from './individuos-lista.component';

describe('IndividuosListaComponent', () => {
  let component: IndividuosListaComponent;
  let fixture: ComponentFixture<IndividuosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
