import { Injectable } from '@angular/core';
import { Produto, ProdutoCarrinho } from '../models/Produto';
import { ProdutoServiceService } from './produto-service.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtosNoCarrinho: ProdutoCarrinho[] = [];;
  produtoAdicionado: Produto = new Produto();
  produtoAdicionadoCarrinho: ProdutoCarrinho = new ProdutoCarrinho();

  constructor(
    private produtoService: ProdutoServiceService
  ) { }

  adicionarProduto(id: number, qtde: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produtoAdicionado = resp;

      this.produtoAdicionadoCarrinho.id = this.produtoAdicionado.id;
      this.produtoAdicionadoCarrinho.nome = this.produtoAdicionado.nome;
      this.produtoAdicionadoCarrinho.descricao = this.produtoAdicionado.descricao;
      this.produtoAdicionadoCarrinho.preco = this.produtoAdicionado.preco;
      this.produtoAdicionadoCarrinho.imagem1 = this.produtoAdicionado.imagem1;
      this.produtoAdicionadoCarrinho.imagem2 = this.produtoAdicionado.imagem2;
      this.produtoAdicionadoCarrinho.categoria = this.produtoAdicionado.categoria;
      this.produtoAdicionadoCarrinho.criadoPor = this.produtoAdicionado.criadoPor;

      for(let i = 0; i < qtde; i++) {
        this.produtosNoCarrinho.push(this.produtoAdicionadoCarrinho);
      }
      
      console.log(this.produtoAdicionadoCarrinho);
      console.log(this.produtosNoCarrinho);
      this.produtoAdicionado = new Produto();
      this.produtoAdicionadoCarrinho = new ProdutoCarrinho();
    })
  }
}
