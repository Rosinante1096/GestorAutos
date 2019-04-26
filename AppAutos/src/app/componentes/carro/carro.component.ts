import { Component, OnInit } from '@angular/core';
import { Carro } from '../../modelo/carro';
import { CARROS } from 'src/app/transversal/constante';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/servicios/carro.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carro:Carro;
  carroEjemplo:Carro;
  listaCarros= CARROS;
  constructor(private _router:Router,
              private _carroService:CarroService) { }

  ngOnInit() {
    console.log(this.listaCarros);
  }

  verDetalle(item:Carro){ 
    this._carroService.setCarro(item);
    this._router.navigate(['/carro-detalle']);
  }
}
