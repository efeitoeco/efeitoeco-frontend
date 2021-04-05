import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
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


  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.estaLogado();
    this.findByIdUsuario();  
  }

  estaLogado() {
    if(environment.token == '') {
      this.route.navigate(['/home']);
    }
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }
}
