import { Produto } from "./Produto";

export class Usuario {
    public id: number;
    public nome: string;
    public senha: string;
    public sobrenome: string;
    public email: string;
    public foto: string;
    public produtosVenda: Produto[];
    public minhasCompras: Produto[];
}