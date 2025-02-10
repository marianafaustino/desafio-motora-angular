import { TestBed } from '@angular/core/testing';

import { ViagensService } from './viagens.service';

describe('ViagensService', () => {
  let service: ViagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
