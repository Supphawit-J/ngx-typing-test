import { TestBed } from '@angular/core/testing';

import { NgxTypingTestService } from './ngx-typing-test.service';

describe('NgxTypingTestService', () => {
  let service: NgxTypingTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTypingTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
