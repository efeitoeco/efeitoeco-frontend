import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tela-conta',
  templateUrl: './tela-conta.component.html',
  styleUrls: ['./tela-conta.component.css']
})


export class TelaContaComponent implements OnInit {

  usuario: Usuario = new Usuario();
  minhaFoto = environment.foto;
  meuNome = environment.nome;
  meuId = environment.id;

  administrador: boolean;


  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(this.meuId == 1) {
      this.administrador = true;
    } else {
      this.administrador = false;
    }
    this.estaLogado();
    this.findByIdUsuario();  
  }

  estaLogado() {
    if(environment.token == '') {
      this.router.navigate(['/home']);
    }
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  sair() {
    environment.token = '';
    environment.nome = '';
    environment.id = 0;
    environment.foto = '';
    this.alertas.showAlertInfo("Você saiu da conta");
    this.router.navigate(['/home']);
  }
}
