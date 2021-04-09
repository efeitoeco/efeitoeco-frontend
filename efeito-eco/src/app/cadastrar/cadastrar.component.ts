import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  confirmeSenha: string;


  constructor(
    private auth: AuthService, 
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value;
  }

  registrar(){
    if(this.usuario.senha != this.confirmeSenha) {
      this.alertas.showAlertDanger(`Os campos de "senha" e "confirmar senha" devem ser iguais!`);
    } else if(!this.verificarLinkImagem(this.usuario.foto)) {
      this.alertas.showAlertDanger("Link de imagem deve ser um link direto de uma imagem JPEG, JPG, GIF ou PNG");
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario)=> {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Seja bem-vindo(a), você é um amante da natureza!');
      }, err => {       
        this.alertas.showAlertDanger(err.error.mensagem);
      })
    }
  }

  verificarLinkImagem(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

}

