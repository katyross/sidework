import { TestBed } from '@angular/core/testing';

import { ShiftService } from './shift.service';

describe('Shift.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftService = TestBed.get(ShiftService);
    expect(service).toBeTruthy();
  });
});
