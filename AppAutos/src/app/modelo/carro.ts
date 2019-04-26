export interface Carro{
    marca:string;
    precio:number;
    modelo:string;
    placa:string;
    descripcion:string;
    img:string;
       
}

export class Carro{
    marca:string;
    precio:number;
    modelo:string;
    placa:string;
    descripcion:string;
    img:string;


    constructor(marca:string,precio:number,modelo:string,placa:string,descripcion:string,img:string){
        this.marca = marca;
        this.precio=precio;
        this.modelo=modelo;
        this.placa=placa;
        this.descripcion=descripcion;
        this.img = img;
    }
}