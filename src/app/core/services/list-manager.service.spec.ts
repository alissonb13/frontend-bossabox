import { TestBed } from '@angular/core/testing';

import { ListManagerService } from './list-manager.service';

describe('ListManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListManagerService = TestBed.get(ListManagerService);
    expect(service).toBeTruthy();
  });
});
