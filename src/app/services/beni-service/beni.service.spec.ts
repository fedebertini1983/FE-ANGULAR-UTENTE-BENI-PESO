import { TestBed } from '@angular/core/testing';

import { BeniService } from './beni.service';

describe('BeniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeniService = TestBed.get(BeniService);
    expect(service).toBeTruthy();
  });
});
