import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  
  
  constructor(
    private router: Router,
    private auth: AuthService,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  enviarContato(){
    this.alerta.showAlertSuccess("Sua mensagem foi enviada com sucesso!");
    this.router.navigate(['/home']);
  }

}
