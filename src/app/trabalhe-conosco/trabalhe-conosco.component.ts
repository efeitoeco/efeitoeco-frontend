import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
   
  };

  enviar(){
    this.router.navigate(['/home']);
    alert ('Obrigad@ pelo interesse em colaborar com o Efeito Eco! Seu currículo será analisado com carinho pela nossa equipe de gente!')
    window.scroll(0,0)
    }

}
