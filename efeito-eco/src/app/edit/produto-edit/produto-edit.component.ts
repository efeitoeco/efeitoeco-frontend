import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/CadastrarProduto';
import { Categoria } from 'src/app/models/Categoria';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto;
  categoriaLista: Categoria[];
  meuId: number;
  usuario: Usuario = new Usuario();
  categoriaId: number;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.verTodasCategorias();
    this.meuId = this.route.snapshot.params['id'];
    this.verTodasCategorias();
    this.findByIdUsuario();
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  verTodasCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.categoriaLista = resp;
    })
  }

  atualizarProduto() {

  }

}
