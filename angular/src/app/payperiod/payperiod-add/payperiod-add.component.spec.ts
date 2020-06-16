import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayperiodAddComponent } from './payperiod-add.component';

describe('PayperiodAddComponent', () => {
  let component: PayperiodAddComponent;
  let fixture: ComponentFixture<PayperiodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayperiodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayperiodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
