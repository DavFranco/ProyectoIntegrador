export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    profesion: string
    img: string;

    constructor(nombre: string,apellido: string, profesion: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion= profesion;
        this.img = img;
    }
}