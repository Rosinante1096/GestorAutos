import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/servicios/carro.service';
import { Carro } from 'src/app/modelo/carro';
import {Location} from '@angular/common';

@Component({
  selector: 'app-carro-detalle',
  templateUrl: './carro-detalle.component.html',
  styleUrls: ['./carro-detalle.component.css']
})
export class CarroDetalleComponent implements OnInit {

  constructor(private _carroService:CarroService,
              private _location:Location) { }

  carro:Carro;
  mostrar:boolean= false;

  ngOnInit() {
    this.getCarro();
  }

  getCarro(){
    this.carro = this._carroService.getCarro();
    this.mostrar = true;
  }

  regresar(){
    this._location.back();
  }


}
