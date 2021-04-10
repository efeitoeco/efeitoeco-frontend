import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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
  meuId = environment.id;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendedorId = this.route.snapshot.params['id'];
    if(this.vendedorId == this.meuId) {
      this.router.navigate(['/conta']);
    }
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
