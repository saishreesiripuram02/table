import { TestBed } from '@angular/core/testing';

import { AddService } from './userData';

describe('AddService', () => {
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
