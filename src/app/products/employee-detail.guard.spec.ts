import { TestBed } from '@angular/core/testing';

import { EmployeeDetailGuard } from './employee-detail.guard';

describe('ProductDetailGuard', () => {
  let guard: EmployeeDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
