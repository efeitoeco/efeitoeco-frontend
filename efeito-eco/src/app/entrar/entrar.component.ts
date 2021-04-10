import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../models/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin;


  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  entrar(){
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp;

      environment.token = this.usuarioLogin.token;
      environment.id = this.usuarioLogin.id;
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;

      console.log(environment.token);
      console.log(environment.id);
      console.log(environment.nome);
      console.log(environment.foto);


      this.router.navigate(['/home']);

    }, err=>{
      this.alertas.showAlertDanger("E-mail ou senha incorretos")
    })
  }

}
