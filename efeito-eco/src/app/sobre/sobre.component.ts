import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  mutado: boolean;

  constructor() { }

  ngOnInit(){
    window.scroll(0,0);
    this.mutado = false;
    this.mutarVolume();
  }

  mutarVolume() {
    let vid: any = document.getElementById('myVideo');
    let botaoMutado: any = document.getElementById('fa-volume-mute');
    let botaoSom: any = document.getElementById('fa-volume-up');

    if(!this.mutado) {
      vid.muted = false;
      botaoMutado.style.display = 'block';
      botaoSom.style.display = 'none';
    } else {
      vid.muted = true;
      botaoMutado.style.display = 'none';
      botaoSom.style.display = 'block';
    }

    this.mutado = !this.mutado;
  }

}
