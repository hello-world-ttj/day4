import { TestBed } from '@angular/core/testing';

import { DistrictPageService } from './district-page.service';

describe('DistrictPageService', () => {
  let service: DistrictPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
