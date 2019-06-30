import { TestBed } from '@angular/core/testing';

import { LandRegisterService } from './land-register.service';

describe('LandRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandRegisterService = TestBed.get(LandRegisterService);
    expect(service).toBeTruthy();
  });
});
