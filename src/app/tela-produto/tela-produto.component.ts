import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent implements OnInit {

  quantidade: number = 1;


  constructor() { }

  ngOnInit() {
  }
  aumentarQuantidade(){
    this.quantidade++;
  }
  diminuirQuantidade(){
    if(this.quantidade>1){
      this.quantidade--
    }
  }
}
