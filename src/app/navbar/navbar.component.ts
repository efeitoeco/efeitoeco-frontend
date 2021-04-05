import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listaCategoria: Categoria[];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.verTodasCategorias();
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }
}
