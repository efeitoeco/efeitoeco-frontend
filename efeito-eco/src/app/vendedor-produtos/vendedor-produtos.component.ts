import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-vendedor-produtos',
  templateUrl: './vendedor-produtos.component.html',
  styleUrls: ['./vendedor-produtos.component.css']
})
export class VendedorProdutosComponent implements OnInit {

  @Input() vendedor: Usuario;
  listaDeProdutos: Produto[];

  constructor() { }

  ngOnInit(): void {
    this.listaDeProdutos = this.vendedor.produtosVenda;
  }

}
