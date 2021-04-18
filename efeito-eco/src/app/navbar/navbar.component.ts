import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';
import { Produto } from '../models/Produto';
import { Usuario } from '../models/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  nomeProduto: string;
  listaProdutos: Produto[];
  meuNome = environment.nome;
  meuId = environment.id;
  minhaFoto = environment.foto;

  listaCategoria: Categoria[];


  constructor(
    private categoriaService: CategoriaService,
    public auth: AuthService,
    public produtoService: ProdutoServiceService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    this.verTodasCategorias();
    this.zerarPesquisar();
    this.findByIdUsuario();  
  }

  verTodasCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp;
    })
  }

  atualizarDados() {
    let urlAtual = this.router.url;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  findByNomeProduto(){
    this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produto[])=>{
      this.atualizarDados();
      this.listaProdutos = resp;
      let dropdown:any = document.getElementById('dropDown');
      dropdown.style.display = 'block';
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

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.meuId).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  sair() {
    environment.token = '';
    environment.nome = '';
    environment.id = 0;
    environment.foto = '';
    this.alertas.showAlertInfo("Você saiu da conta");
    this.router.navigate(['/home']);
  
  }
}
