import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrarProduto, Produto } from 'src/app/models/Produto';
import { Categoria } from 'src/app/models/Categoria';
import { Usuario } from 'src/app/models/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoServiceService } from 'src/app/service/produto-service.service';
import { environment } from 'src/environments/environment.prod';
import { CadastrarProdutoService } from 'src/app/service/cadastrar-produto.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  antigoProduto: Produto = new Produto();
  produto: CadastrarProduto = new CadastrarProduto();
  categoriaLista: Categoria[];
  meuId: number = environment.id;
  usuario: Usuario = new Usuario();
  categoria: Categoria = new Categoria();
  categoriaId: number;
  produtoId: number;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoServiceService,
    private alertas: AlertasService,
    private CadastrarProdutoService: CadastrarProdutoService
  ) { }

  ngOnInit(): void {
    this.verTodasCategorias();
    this.produtoId = this.route.snapshot.params['id'];
    this.findByIdProduto();
    this.verTodasCategorias();
  }

  verTodasCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.categoriaLista = resp;
    })
  }

  atualizarProduto() {
    if(!this.verificarLinkImagem(this.produto.imagem1) || !this.verificarLinkImagem(this.produto.imagem2)) {
      this.alertas.showAlertDanger("Link de imagem deve ser um link direto de uma imagem JPEG, JPG, GIF ou PNG");
    } else {
      console.log(this.produto);
      this.CadastrarProdutoService.putProduto(this.produto).subscribe((resp: CadastrarProduto) => {
        this.produto = resp;
        this.alertas.showAlertSuccess("Produto atualizado com sucesso!");
        this.produto = new CadastrarProduto();
        this.router.navigate(['/conta/meus-produtos']);
      })
    }
  }

  findByIdProduto() {
    this.produtoService.getByIdProduto(this.produtoId).subscribe((resp: Produto) => {
      this.antigoProduto = resp;
      this.produto.id = this.antigoProduto.id;
      this.produto.nome = this.antigoProduto.nome;
      this.produto.descricao = this.antigoProduto.descricao;
      this.produto.preco = this.antigoProduto.preco;
      this.produto.imagem1 = this.antigoProduto.imagem1;
      this.produto.imagem2 = this.antigoProduto.imagem2;
      this.produto.categoria = this.antigoProduto.categoria;
      this.produto.idDoUsuario = this.antigoProduto.criadoPor.id;
      this.produto.idDoUsuario = this.antigoProduto.criadoPor.id;
      this.produto.cliente = this.antigoProduto.cliente;
    })
  } 

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoriaId).subscribe((resp: Categoria) => {
      this.categoria = resp;
      this.produto.categoria.id = this.categoria.id;
      this.produto.categoria.nome = this.categoria.nome;
    })    
  }

  verificarLinkImagem(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

}
