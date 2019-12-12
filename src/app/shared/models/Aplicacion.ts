export class Aplicacion {
    idAplicacion: number;
    nombreAplicacion: string;
    iconoAplicacion: string;
    constructor(id: number, nombre: string, icono: string) {
    this.idAplicacion = id;
    this.nombreAplicacion = nombre;
    this.iconoAplicacion = icono;
    }
}