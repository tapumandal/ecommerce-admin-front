import { TestBed } from '@angular/core/testing';

import { StringformateService } from './stringformate.service';

describe('StringformateService', () => {
  let service: StringformateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringformateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
