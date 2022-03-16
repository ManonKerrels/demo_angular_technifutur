import { TestBed } from '@angular/core/testing';

import { NumberGuard } from './number.guard';

describe('NumberGuard', () => {
  let guard: NumberGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NumberGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
