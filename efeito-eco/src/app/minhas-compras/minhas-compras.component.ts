import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../models/Produto';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css']
})
export class MinhasComprasComponent implements OnInit {

  listaDeProdutos: Produto[];

  usuario: Usuario = new Usuario();

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.findByIdUsuario();
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(environment.id).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.listaDeProdutos = this.usuario.minhasCompras;
    })
  }

}
