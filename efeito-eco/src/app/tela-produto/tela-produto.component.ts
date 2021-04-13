import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../models/Produto';
import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  quantidade: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoServiceService,
    private carrinhoService: CarrinhoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.quantidade = 1;

    let idProduto = this.route.snapshot.params['id'];
    this.findByIdProduto(idProduto);
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if(this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(idProduto: number) {
    if(environment.token == '') {
      this.alertas.showAlertDanger("Você precisa estar logado para adicionar produtos ao seu carrinho.");
      this.router.navigate(['/entrar']);
    } else {
      this.carrinhoService.adicionarProduto(idProduto, this.quantidade);
      this.alertas.showAlertSuccess("Produto adicionado com sucesso!");
    }
  }
}
