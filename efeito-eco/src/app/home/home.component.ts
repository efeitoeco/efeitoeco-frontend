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

  key = 'id';
  reverse = true;

  constructor(
    private produtoService: ProdutoServiceService
  ) { }

  ngOnInit(): void {
    this.verProdutosLancamentos();
  }

  verProdutosLancamentos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;

      /* Ordenando a lista */
      this.listaProdutos.sort((a, b) => (a.id < b.id) ? 1 : -1);
    })
  }

}
