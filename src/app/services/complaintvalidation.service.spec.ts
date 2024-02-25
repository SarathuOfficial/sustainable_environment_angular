import { TestBed } from '@angular/core/testing';

import { ComplaintvalidationService } from './complaintvalidation.service';

describe('ComplaintvalidationService', () => {
  let service: ComplaintvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
