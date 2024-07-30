import { Estudiante } from "./estudiante";

export class Postulacion {
    constructor (
       public id: number,
       public fechaPostulacion: Date,
       public estudiante: Estudiante,
       public estado: number,
    ){}
}