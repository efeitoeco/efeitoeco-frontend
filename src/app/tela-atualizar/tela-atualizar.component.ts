import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
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
    private router: Router
  ) { }

  ngOnInit(){
    
    this.findByIdUsuario();
    console.log(this.usuario.nome)
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario)=>{
      this.usuario = resp;
      console.log("deu bom");
    })
   }

   atualizarUsuario(){
    this.usuario.id = this.meuId

    this.auth.putUsuario(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
      alert("Se tu queria alterar, parabéns, você conseguiu")
      this.router.navigate(['/conta'])
      
    })
  }
}
