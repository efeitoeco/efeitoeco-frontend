import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TelaContaComponent } from './tela-conta/tela-conta.component';
import { TelaAtualizarComponent } from './tela-atualizar/tela-atualizar.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { TelaVendedorComponent } from './tela-vendedor/tela-vendedor.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { VendedorDadosComponent } from './vendedor-dados/vendedor-dados.component';
import { VendedorProdutosComponent } from './vendedor-produtos/vendedor-produtos.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntrarComponent,
    CadastrarComponent,
    HomeComponent,
    RodapeComponent,
    ProdutosComponent,
    TelaProdutoComponent,
    ChatbotComponent,
    TelaContaComponent,
    TelaAtualizarComponent,
    CadastrarProdutosComponent,
    MeusProdutosComponent,
    TrabalheConoscoComponent,
    SobreComponent,
    ContatoComponent,
    AlterarSenhaComponent,
    AlertasComponent,
    TelaVendedorComponent,
    AcessibilidadeComponent,
    VendedorDadosComponent,
    VendedorProdutosComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    CarrinhoComponent,
    MinhasComprasComponent,
    CadastrarCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
