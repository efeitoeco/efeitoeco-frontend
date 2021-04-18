import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  encontrarEndereco(cep: String): Observable<Endereco> {
    return this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
