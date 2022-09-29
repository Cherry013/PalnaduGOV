import { TestBed } from '@angular/core/testing';

import { GetvaluesService } from './getvalues.service';

describe('GetvaluesService', () => {
  let service: GetvaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetvaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
