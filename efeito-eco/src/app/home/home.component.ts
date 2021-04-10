import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[];

  destaquesId: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  listaDestaques: Produto[];

  key = 'id';
  reverse = true;

  constructor(
    private produtoService: ProdutoServiceService
  ) { }

  ngOnInit(): void {
    this.verProdutosLancamentos();
    this.verProdutosDestaque();
  }

  verProdutosLancamentos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;

      /* Ordenando a lista */
      this.listaProdutos.sort((a, b) => (a.id < b.id) ? 1 : -1);
    })
  }

  verProdutosDestaque() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaDestaques = resp;

      /* Filtrando a lista */
      this.listaDestaques = this.listaDestaques.filter((produto: Produto) => {
        return this.destaquesId.includes(produto.categoria.id);
      })
    })
  }

}
