import { TestBed } from '@angular/core/testing';

import { Shift.ServiceService } from './shift.service.service';

describe('Shift.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Shift.ServiceService = TestBed.get(Shift.ServiceService);
    expect(service).toBeTruthy();
  });
});
