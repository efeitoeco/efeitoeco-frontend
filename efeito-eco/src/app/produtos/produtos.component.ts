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
  maiorPreco: number;
  menorPreco: number;

  listaCategoria: Categoria[];

  categoriasSelecionadas: number[];

  tipoOrdenacao: string;

  key = 'id';
  reverse = true;

  constructor(
    private produtoService: ProdutoServiceService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.tipoOrdenacao = 'lancamento';
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
      this.pegarPrecoMax();
      this.pegarPrecoMin();
      this.precoFiltrado = this.maiorPreco;
    })
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }

  filtrarPorCategoria(event: any, id: number) {

    if(event.target.checked) {
      console.log(id + " checked");
      this.categoriasSelecionadas.push(id);
    } else {
      console.log(id + " unchecked");
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter(m => m != id);
    }

    this.filtrarProdutos();
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

  pegarPrecoMax() {
    let arrayPrecos: number[] = [];
    for(let i = 0; i < this.listaProduto.length; i++) {
      arrayPrecos.push(this.listaProduto[i].preco);
    }
    
    this.maiorPreco = Math.max(...arrayPrecos);
  }

  pegarPrecoMin() {
    let arrayPrecos: number[] = [];
    for(let i = 0; i < this.listaProduto.length; i++) {
      arrayPrecos.push(this.listaProduto[i].preco);
    }
    
    this.menorPreco = Math.min(...arrayPrecos);
  }

  ordenar() {
    switch(this.tipoOrdenacao) {
      case 'menorPreco':
        this.ordenarMenorPreco();
        break;
      case 'precoMaior':
        this.ordenarMaiorPreco();
        break;
      case 'az':
        this.ordenarAZ();
        break;
      case 'za':
        this.ordenarZA();
        break;
      case 'lancamento':
        this.ordenarLancamento();
        break;
    }
  }

  ordenarMaiorPreco() {
    this.key = 'preco';
    this.reverse = true;
  }

  ordenarMenorPreco() {
    this.key = 'preco';
    this.reverse = false;
  }

  ordenarAZ() {
    this.key = 'nome';
    this.reverse = false;
  }

  ordenarZA() {
    this.key = 'nome';
    this.reverse = true;
  }

  ordenarLancamento() {
    this.key = 'id';
    this.reverse = true;
  }
}