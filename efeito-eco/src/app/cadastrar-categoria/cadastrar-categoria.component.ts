import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit(): void {
    this.verTodasCategorias();
  }

  cadastrarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      this.alertas.showAlertSuccess("Categoria cadastrada com sucesso!");
    })
  }


  verTodasCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    })
  }
}
