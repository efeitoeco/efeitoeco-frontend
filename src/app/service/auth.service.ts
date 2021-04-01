import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../models/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

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

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  logado(){
    let ok: boolean = false;
    if (environment.token!=''){
      ok = true
    }
    return ok;
  }

}
