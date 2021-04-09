import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/Produto';
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
    private produtoService: ProdutoServiceService
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
}
