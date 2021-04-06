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

  listaCategoria: Categoria[];

  categoriasSelecionadas: number[];

  constructor(
    private produtoService: ProdutoServiceService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.verTodosProdutos();
    this.verTodasCategorias();

    this.listaProdutoFiltrada = this.listaProduto;
    
    this.categoriasSelecionadas = new Array<number>();
  }

  verTodosProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
      this.listaProdutoFiltrada = resp;
    })
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }

  filtroCategoria(obj: Produto) {
    return this.categoriasSelecionadas.includes(obj.categoria.id);
  }

  filtrarPorCategoria(event: any, id: number) {

    if(event.target.checked) {
      console.log(id + " checked");
      this.categoriasSelecionadas.push(id);
    } else {
      console.log(id + " unchecked");
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter(m => m != id);
    }

    console.log(this.categoriasSelecionadas);
    if(this.categoriasSelecionadas.length < 1) {
      this.listaProdutoFiltrada = [...this.listaProduto];
    } else {
      this.listaProdutoFiltrada = this.listaProduto.filter((produto: Produto) => {
        return this.categoriasSelecionadas.includes(produto.categoria.id);
      })
  }
    console.log(this.listaProduto);
  }
}
