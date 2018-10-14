import { TestBed } from '@angular/core/testing';

import { NewLibService } from './new-lib.service';

describe('NewLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewLibService = TestBed.get(NewLibService);
    expect(service).toBeTruthy();
  });
});
