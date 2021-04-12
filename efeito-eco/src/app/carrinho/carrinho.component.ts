import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto, ProdutoCarrinho } from '../models/Produto';
import { Usuario } from '../models/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtosCarrinho: ProdutoCarrinho[];
  produtosCarrinhoFull: Produto[];

  temProdutos: boolean;
  usuario: Usuario = new Usuario();

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router,
    private alertas: AlertasService,
    private auth: AuthService
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
    this.produtosCarrinhoFull = this.carrinhoService.produtosNoCarrinhoFull;
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

  terminarCompra() {
    // this.auth.getByIdUsuario(environment.id).subscribe((resp: Usuario) => {
    //   this.usuario = resp;
    //   for(let i = 0; i < this.produtosCarrinho.length; i++) {
    //     this.usuario.minhasCompras.push(this.produtosCarrinhoFull[i]);
    //   }

    //   this.auth.putUsuario(this.usuario).subscribe((resp: Usuario) => {
    //     this.usuario = resp;
    //     this.alertas.showAlertSuccess("Compra efetuada!");
    //     this.carrinhoService.esvaziarCarrinho();
    //     this.router.navigate(['/home']);
    //   })
    // })

    let idDosProdutosComprados = [];

    for(let i = 0; i < this.produtosCarrinho.length; i++) {
      idDosProdutosComprados.push(this.produtosCarrinhoFull[i].id);
    }

    this.auth.adicionarProdutosComprados(environment.id, idDosProdutosComprados).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.alertas.showAlertSuccess("Compra efetuada!");
      this.carrinhoService.esvaziarCarrinho();
      this.router.navigate(['/home']);
    })
  }

}
