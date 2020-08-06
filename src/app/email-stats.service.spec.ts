import { TestBed } from '@angular/core/testing';

import { EmailStatsService } from './email-stats.service';

describe('EmailStatsService', () => {
  let service: EmailStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
