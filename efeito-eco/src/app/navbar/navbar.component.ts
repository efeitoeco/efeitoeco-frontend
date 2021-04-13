import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';
import { Produto } from '../models/Produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeProduto: string;
  listaProdutos: Produto[];

  listaCategoria: Categoria[];


  constructor(
    private categoriaService: CategoriaService,
    public auth: AuthService,
    public produtoService: ProdutoServiceService,
    private router: Router
  ) { }

  ngOnInit(){
    this.verTodasCategorias();
    this.zerarPesquisar();
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }

  findByNomeProduto(){
    this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
      let dropdown:any = document.getElementById('dropDown');
      dropdown.style.display = 'block'
    })
  }

  zerarPesquisar() {
    setTimeout( () => {
      this.nomeProduto = ''
      this.listaProdutos = []
      let dropdown:any = document.getElementById('dropDown');
        dropdown.style.display = 'none'
    }, 1000)  
  }

}
