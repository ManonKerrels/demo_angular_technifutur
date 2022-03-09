import { TestBed } from '@angular/core/testing';

import { RecupObjService } from './recup-obj.service';

describe('RecupObjService', () => {
  let service: RecupObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
