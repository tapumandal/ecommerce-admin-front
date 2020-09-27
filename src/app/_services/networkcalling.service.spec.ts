import { TestBed } from '@angular/core/testing';

import { NetworkcallingService } from './networkcalling.service';

describe('NetworkcallingService', () => {
  let service: NetworkcallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkcallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
