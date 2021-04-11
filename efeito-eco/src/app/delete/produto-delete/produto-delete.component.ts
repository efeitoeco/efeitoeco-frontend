import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutoServiceService } from 'src/app/service/produto-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto();
  idProduto: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoServiceService,
    private alertas: AlertasService,
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id: number){
    console.log(this.idProduto);
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  apagarProduto() {
    console.log(this.idProduto);
    this.produtoService.deleteProduto(this.idProduto).subscribe(()=>{
      this.alertas.showAlertSuccess("Produto apagado com sucesso");
      this.router.navigate(['/conta/meus-produtos'])
    })
  }

}
