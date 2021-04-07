import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../models/Produto';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.css']
})
export class MeusProdutosComponent implements OnInit {

  usuario: Usuario =  new Usuario();
  meuId: number = environment.id;
  listaDeProdutos: Produto[];

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    console.log(this.meuId)
    this.findByIdUsuario()
    console.log(this.usuario.produtosVenda)
    console.log(this.usuario.nome)

    //this.listaDeProdutos = [...this.usuario.produtosVenda]
    this.preencherProdutos()
    console.log(this.listaDeProdutos)
  }

  preencherProdutos() {
    for(let i=0;i<this.usuario.produtosVenda.length;i++){
     this.listaDeProdutos.push(this.usuario.produtosVenda[i])
    }
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

}
