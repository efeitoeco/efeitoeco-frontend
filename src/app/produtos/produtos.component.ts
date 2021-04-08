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
  listaProdutoFiltrada: Produto[];
  listaProdutoFiltradaPreco: Produto[];
  precoFiltrado: number;

  listaCategoria: Categoria[];

  categoriasSelecionadas: number[];

  constructor(
    private produtoService: ProdutoServiceService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.precoFiltrado = 500;
    this.verTodosProdutos();
    this.verTodasCategorias();

    this.listaProdutoFiltrada = this.listaProduto;
    
    this.categoriasSelecionadas = new Array<number>();
  }

  verTodosProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
      this.listaProdutoFiltrada = resp;
      this.listaProdutoFiltradaPreco = resp;
    })
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }

  /*filtrarPorPreco() {
    this.listaProdutoFiltradaPreco = this.listaProdutoFiltrada.filter((produto: Produto) => {
      return produto.preco <= this.precoFiltrado;
    })
  }*/

  filtrarPorCategoria(event: any, id: number) {

    if(event.target.checked) {
      console.log(id + " checked");
      this.categoriasSelecionadas.push(id);
    } else {
      console.log(id + " unchecked");
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter(m => m != id);
    }

    this.filtrarProdutos();

    /*
    console.log(this.categoriasSelecionadas);
    if(this.categoriasSelecionadas.length < 1) {
      this.listaProdutoFiltrada = [...this.listaProduto];
    } else {
      this.listaProdutoFiltrada = this.listaProduto.filter((produto: Produto) => {
        return this.categoriasSelecionadas.includes(produto.categoria.id);
      })
    }
    console.log(this.listaProduto);*/
  }

  filtrarProdutos() {
    /* Filtrando por categoria */
    if(this.categoriasSelecionadas.length < 1) {
      this.listaProdutoFiltrada = [...this.listaProduto];
    } else {
      this.listaProdutoFiltrada = this.listaProduto.filter((produto: Produto) => {
        return this.categoriasSelecionadas.includes(produto.categoria.id);
      })
    }

    /* Filtrando por preço */
    this.listaProdutoFiltrada = this.listaProdutoFiltrada.filter((produto: Produto) => {
      return produto.preco <= this.precoFiltrado;
    })
  }
}
