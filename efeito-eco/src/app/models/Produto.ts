import { Categoria } from "./Categoria";
import { Usuario } from "./Usuario";

export class Produto {
    public id: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public imagem1: string;
    public imagem2: string;
    public categoria: Categoria;
    public criadoPor: Usuario;
    public cliente: Usuario[];
}

export class CadastrarProduto {
    public id: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public imagem1: string;
    public imagem2: string;
    public categoria: Categoria;
    public idDoUsuario: number;
    public cliente: Usuario[];
}

export class ProdutoCarrinho {
    public id: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public imagem1: string;
    public imagem2: string;
    public categoria: Categoria;
    public criadoPor: Usuario;
}