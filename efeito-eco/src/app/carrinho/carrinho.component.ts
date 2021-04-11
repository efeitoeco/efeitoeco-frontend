import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoCarrinho } from '../models/Produto';
import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtosCarrinho: ProdutoCarrinho[];
  temProdutos: boolean;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(): void {
    if(environment.token == '') {
      this.router.navigate(['/home']);
    }
    if(this.carrinhoService.produtosNoCarrinho.length < 1) {
      this.temProdutos = false;
    } else {
      this.temProdutos = true;
    }
    this.produtosCarrinho = this.carrinhoService.produtosNoCarrinho;
    console.log(this.produtosCarrinho);
  }

  atualizarDados() {
    let urlAtual = this.router.url;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/carrinho']);
  }

  removerDoCarrinho(i: number) {
    this.carrinhoService.removerProduto(i);
    this.atualizarDados();
  }

  finalizarCompra() {
    this.alertas.showAlertSuccess("Compra efetuada!");
    this.carrinhoService.esvaziarCarrinho();
    this.router.navigate(['/home']);
  }

}
