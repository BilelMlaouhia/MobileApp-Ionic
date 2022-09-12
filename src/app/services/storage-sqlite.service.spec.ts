import { TestBed } from '@angular/core/testing';

import { StorageSqliteService } from './storage-sqlite.service';

describe('StorageSqliteService', () => {
  let service: StorageSqliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageSqliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
