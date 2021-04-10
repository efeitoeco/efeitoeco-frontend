import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tela-vendedor',
  templateUrl: './tela-vendedor.component.html',
  styleUrls: ['./tela-vendedor.component.css']
})
export class TelaVendedorComponent implements OnInit {

  vendedor: Usuario = new Usuario();
  vendedorId: number;
  dados: boolean;
  produtos: boolean;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.vendedorId = this.route.snapshot.params['id'];
    this.findByIdUsuario();
    this.dados = true;
    this.produtos = false;
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.vendedorId).subscribe((resp: Usuario) => {
      this.vendedor = resp;
    })
  }

  mostrarDados() {
    this.dados = true;
    this.produtos = false;
  }

  mostrarProdutos() {
    this.dados = false;
    this.produtos = true;
  }

}
