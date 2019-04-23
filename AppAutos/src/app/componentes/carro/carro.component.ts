import { Component, OnInit } from '@angular/core';
import { Carro } from '../../modelo/carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carro:Carro;
  carroEjemplo:Carro;
  constructor() { }

  ngOnInit() {
    this.carroEjemplo = new Carro("Mazda",2000,"2019","kas-586","Auto en venta");
  }

}
