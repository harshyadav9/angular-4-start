import { TestBed, inject } from '@angular/core/testing';

import { MessagingDataService } from './messaging-data.service';

describe('MessagingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagingDataService]
    });
  });

  it('should be created', inject([MessagingDataService], (service: MessagingDataService) => {
    expect(service).toBeTruthy();
  }));
});
