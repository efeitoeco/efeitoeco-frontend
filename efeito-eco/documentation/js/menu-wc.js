'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">efeitoeco-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-92546672d44a5e7d2e9248d41437d797"' : 'data-target="#xs-components-links-module-AppModule-92546672d44a5e7d2e9248d41437d797"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-92546672d44a5e7d2e9248d41437d797"' :
                                            'id="xs-components-links-module-AppModule-92546672d44a5e7d2e9248d41437d797"' }>
                                            <li class="link">
                                                <a href="components/AcessibilidadeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcessibilidadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlterarSenhaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlterarSenhaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarCategoriaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastrarCategoriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarProdutosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastrarProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrinhoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarrinhoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatbotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatbotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContatoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContatoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeusProdutosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeusProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MinhasComprasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinhasComprasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutoDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProdutoDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutoEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProdutoEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RodapeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RodapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SobreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelaAtualizarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TelaAtualizarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelaContaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TelaContaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelaProdutoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TelaProdutoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelaVendedorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TelaVendedorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrabalheConoscoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrabalheConoscoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendedorDadosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VendedorDadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendedorProdutosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VendedorProdutosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AtualizarUsuario.html" data-type="entity-link">AtualizarUsuario</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadastrarProduto.html" data-type="entity-link">CadastrarProduto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Categoria.html" data-type="entity-link">Categoria</a>
                            </li>
                            <li class="link">
                                <a href="classes/Endereco.html" data-type="entity-link">Endereco</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produto.html" data-type="entity-link">Produto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produto-1.html" data-type="entity-link">Produto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProdutoCarrinho.html" data-type="entity-link">ProdutoCarrinho</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioLogin.html" data-type="entity-link">UsuarioLogin</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link">AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CadastrarProdutoService.html" data-type="entity-link">CadastrarProdutoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarrinhoService.html" data-type="entity-link">CarrinhoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriaService.html" data-type="entity-link">CategoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CepService.html" data-type="entity-link">CepService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdutoServiceService.html" data-type="entity-link">ProdutoServiceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});