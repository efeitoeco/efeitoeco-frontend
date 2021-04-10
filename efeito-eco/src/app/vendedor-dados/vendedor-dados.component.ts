import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vendedor-dados',
  templateUrl: './vendedor-dados.component.html',
  styleUrls: ['./vendedor-dados.component.css']
})
export class VendedorDadosComponent implements OnInit {

  @Input() vendedor: Usuario;
  @Input() vendedorId: number;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.vendedorId);
    this.findByIdUsuario();
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.vendedorId).subscribe((resp: Usuario) => {
      this.vendedor = resp;
      console.log(this.vendedorId);
    })
  }

}
