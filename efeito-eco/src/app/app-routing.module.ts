import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TelaAtualizarComponent } from './tela-atualizar/tela-atualizar.component';
import { TelaContaComponent } from './tela-conta/tela-conta.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { TelaVendedorComponent } from './tela-vendedor/tela-vendedor.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { VendedorDadosComponent } from './vendedor-dados/vendedor-dados.component';
import { VendedorProdutosComponent } from './vendedor-produtos/vendedor-produtos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent 
  },
  {
    path: 'produtos/:id',
    component: TelaProdutoComponent
  },
  {
    path:'trabalheconosco',
    component: TrabalheConoscoComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  },

  {
    path:'contato',
    component: ContatoComponent
  },

  {
    path: 'conta',
    component: TelaContaComponent,
    children: [
      {
        path: 'atualizar-dados',
        component: TelaAtualizarComponent
      },
      {
        path: 'alterar-senha',
        component: AlterarSenhaComponent
      },
      {
        path: 'cadastrar-produto',
        component: CadastrarProdutosComponent
      },
      {
        path: 'meus-produtos',
        component: MeusProdutosComponent
      },
      {
        path: 'minhas-compras',
        component: MinhasComprasComponent
      },
      {
        path: 'cadastrar-categoria',
        component: CadastrarCategoriaComponent
      },
      {
        path: '',
        redirectTo: 'atualizar-dados',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'usuario/:id',
    component: TelaVendedorComponent
  },
  {
    path: 'trabalhe-conosco',
    component: TrabalheConoscoComponent
  },
  {
    path: 'editar-produto/:id',
    component: ProdutoEditComponent
  },
  {
    path: 'delete-produto/:id',
    component: ProdutoDeleteComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
