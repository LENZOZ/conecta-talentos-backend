import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {
    private estudiantes:Estudiante[] =[];

    constructor(){
        this.estudiantes.push(
            new Estudiante(
                1,
                "juan",
                "maldonado",
                35,
                "Ing informatico",
                "juan@gmail.com",
            ),
        );
    }

    obtenerTodosLosEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    obtenerEstudiante( id:number):Estudiante {
        for (let i=0; i< this.estudiantes.length; i++){
            if (this.estudiantes[i].id == id){
                return this.estudiantes[i];
            }
        }
        return null;
    }

    crearEstudiante (estudiante: Estudiante): Estudiante {
        for (let i =0; i < this.estudiantes.length; i++){
            if (this.estudiantes[i].email === estudiante.email ){
                return null;
            }
            estudiante.id = this.estudiantes.length +1;
            this.estudiantes.push(estudiante);
            return estudiante;
        }
    }

    eliminarEstudiante(id:number):void{
        this
        for (let i =0; i < this.estudiantes.length; i++){
            if (this.estudiantes[i].id==id){
                this.estudiantes.splice(i,1);
            }
        }
    }
}
