import { TestBed } from '@angular/core/testing';

import { HandsetLayoutService } from './handset-layout.service';

describe('HandsetLayoutService', () => {
  let service: HandsetLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandsetLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
