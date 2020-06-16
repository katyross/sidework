import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPeriodListComponent } from './payperiod-list.component';

describe('PayPeriodListComponent', () => {
  let component: PayPeriodListComponent;
  let fixture: ComponentFixture<PayPeriodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPeriodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
