import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent implements OnInit {

  constructor(
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  enviar(){
    this.router.navigate(['/home']);
    this.alerta.showAlertSuccess('Obrigada(o) pelo interesse em colaborar com o Efeito Eco! Seu currículo será analisado com carinho pela nossa equipe de gente!');
    window.scroll(0,0);
  }

}
