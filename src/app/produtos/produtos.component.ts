import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];


  constructor(
    private produtoService: ProdutoServiceService
  ) { }

  ngOnInit(): void {
    this.verTodosProdutos();
  }

  verTodosProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    })
  }

  

}
