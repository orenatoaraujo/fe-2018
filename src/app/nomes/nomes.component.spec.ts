import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomesComponent } from './nomes.component';

describe('NomesComponent', () => {
  let component: NomesComponent;
  let fixture: ComponentFixture<NomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
