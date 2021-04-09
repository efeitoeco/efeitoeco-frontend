import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {
  
  usuario: Usuario = new Usuario ();
  meuId: number = environment.id;
  novaSenha: string;
  confirmeSenha: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.findByIdUsuario();
    console.log(String.fromCharCode(123456))
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value;
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  atualizarSenha(){
    this.usuario.senha = this.novaSenha
    this.auth.putUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  validarSenhaAntiga (){

  }

}
