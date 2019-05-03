import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  nombre:FormControl;
  datos:FormGroup;
  valor:boolean;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    /*this.nombre = new FormControl('Moto 1');

    this.datos = new FormGroup({
        nombre:new FormControl('Moto 1'),
        marca:new FormControl('Moto 2')

    });*/

    this.datos = this._formBuilder.group({
        nombre: ['',Validators.required],
        marca: ['Moto2'],
        detalle: this._formBuilder.group({
          nombre:[],
          peso:[]
        })

    });

  }

  FormValidate(){
    this.valor = this.datos.valid;
  }

}
