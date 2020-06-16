import { TestBed } from '@angular/core/testing';

import { PayperiodService } from './payperiod.service';

describe('PayPeriodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayPeriodService = TestBed.get(PayPeriodService);
    expect(service).toBeTruthy();
  });
});
