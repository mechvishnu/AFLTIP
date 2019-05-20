import { TestBed } from '@angular/core/testing';

import { TeamdataService } from './teamdata.service';

describe('TeamdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamdataService = TestBed.get(TeamdataService);
    expect(service).toBeTruthy();
  });
});
