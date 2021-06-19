import { TestBed } from '@angular/core/testing';

import { PorudzbinaService } from './porudzbina.service';

describe('PorudzbinaService', () => {
  let service: PorudzbinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorudzbinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
