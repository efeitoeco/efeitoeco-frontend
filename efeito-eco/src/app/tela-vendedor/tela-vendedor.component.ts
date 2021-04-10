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

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.vendedorId = this.route.snapshot.params['id'];
    this.findByIdUsuario();
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.vendedorId).subscribe((resp: Usuario) => {
      this.vendedor = resp;
    })
  }

}
