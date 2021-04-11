import { Component, OnInit } from '@angular/core';
import { ProdutoCarrinho } from '../models/Produto';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtosCarrinho: ProdutoCarrinho[];

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.produtosCarrinho = this.carrinhoService.produtosNoCarrinho;
    console.log(this.produtosCarrinho);
  }


}
