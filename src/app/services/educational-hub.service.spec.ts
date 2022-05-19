import { TestBed } from '@angular/core/testing';

import { EducationalHubService } from './educational-hub.service';

describe('EducationalHubService', () => {
  let service: EducationalHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationalHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
