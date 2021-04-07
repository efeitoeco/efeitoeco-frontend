import { TestBed } from '@angular/core/testing';

import { CadastrarProdutoService } from './cadastrar-produto.service';

describe('CadastrarProdutoService', () => {
  let service: CadastrarProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
