import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tela-atualizar',
  templateUrl: './tela-atualizar.component.html',
  styleUrls: ['./tela-atualizar.component.css']
})
export class TelaAtualizarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  meuId = environment.id;

  constructor(
    private auth: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    this.findByIdUsuario();
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  atualizarDados() {
    /* Pegamos a Url atual e atrbuimos ela a variavel local chamada urlAtual */
    let urlAtual = this.router.url;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/conta']);
  }

  atualizarUsuario() {
    this.usuario.id = this.meuId;

    this.auth.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.alerta.showAlertSuccess("Dados atualizados com sucesso!");
        this.atualizarDados();
    })
  }
}
