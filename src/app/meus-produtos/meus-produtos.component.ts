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
    this.encontrarProdutos();
  }

  encontrarProdutos() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
      console.log(this.usuario.nome);
      this.listaDeProdutos = [...this.usuario.produtosVenda]; 
    })
  }

}
