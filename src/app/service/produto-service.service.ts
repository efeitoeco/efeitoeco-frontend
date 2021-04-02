import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produtos');
  }
}
