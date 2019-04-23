export interface Carro{
    marca:string;
    precio:number;
    modelo:string;
    placa:string;
    descripcion:string;
       
}

export class Carro{
    marca:string;
    precio:number;
    modelo:string;
    placa:string;
    descripcion:string;

    constructor(marca:string,precio:number,modelo:string,placa:string,descripcion:string){
        this.marca = marca;
        this.precio=precio;
        this.modelo=modelo;
        this.placa=placa;
        this.descripcion=descripcion;
    }
}