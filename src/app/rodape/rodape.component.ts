import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
