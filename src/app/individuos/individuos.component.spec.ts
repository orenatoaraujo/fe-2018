import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuosComponent } from './individuos.component';

describe('IndividuosComponent', () => {
  let component: IndividuosComponent;
  let fixture: ComponentFixture<IndividuosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
