import { TestBed } from '@angular/core/testing';

import { ProdutoServiceService } from './produto-service.service';

describe('ProdutoServiceService', () => {
  let service: ProdutoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
