import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { Produto } from '../models/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];

  listaCategoria: Categoria[];


  constructor(
    private produtoService: ProdutoServiceService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.verTodosProdutos();
    this.verTodasCategorias();
    
  }

  verTodosProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    })
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }
}
