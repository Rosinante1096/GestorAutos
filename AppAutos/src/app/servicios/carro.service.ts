import { Injectable } from '@angular/core';
import { Carro } from '../modelo/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private carro:Carro;
  constructor() { }

  setCarro(carro:Carro){
    this.carro = carro;
  }

  getCarro(){
    return this.carro;
  }
}
