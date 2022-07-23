export class experiencia {
    id?: number;
    nombreEmpresa: String;
    fechaInicio:number;
    fechaFin:number;
    puesto:string;
    imgEmpresa:string;

    constructor(nombreEmpresa: String,fechaInicio:number,fechaFin:number,puesto:string,imgEmpresa:string){
        this.nombreEmpresa = nombreEmpresa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.puesto = puesto;
        this.imgEmpresa = imgEmpresa;
    }

}