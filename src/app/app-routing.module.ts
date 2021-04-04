import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TelaAtualizarComponent } from './tela-atualizar/tela-atualizar.component';
import { TelaContaComponent } from './tela-conta/tela-conta.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';

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
    path: 'produtos/id',
    component: TelaProdutoComponent
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
        path: 'cadastrar-produto',
        component: CadastrarProdutosComponent
      },
      {
        path: 'meus-produtos',
        component: MeusProdutosComponent
      },
      {
        path: '',
        redirectTo: 'atualizar-dados',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'trabalhe-conosco',
    component: TrabalheConoscoComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
