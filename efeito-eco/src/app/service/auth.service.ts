import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../models/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { AtualizarUsuario } from '../models/AtualizarUsuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  } 

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> { 
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin);
  }   

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario);
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`);
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('http://localhost:8080/usuarios', usuario, this.token);
  }

  atualizarUsuario(id: number, usuario: AtualizarUsuario): Observable<Usuario> {
    return this.http.put<Usuario>(`http://localhost:8080/usuarios/${id}`, usuario, this.token);
  }

  adicionarProdutosComprados(idDoUsuario: number, idDosProdutosComprados: number[]): Observable<Usuario> {
    return this.http.put<Usuario>(`http://localhost:8080/usuarios/${idDoUsuario}/compras`, idDosProdutosComprados, this.token);
  }
  
  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`, this.token);
  }

  logado() {
    let ok: boolean = false;
    if(environment.token != '') {
      ok = true;
    }
    return ok;
  }

}
