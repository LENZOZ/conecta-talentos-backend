import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';
import { EstudiantesService } from './estudiantes.service';
import { Response } from 'express';

@Controller('estudiantes') //localhost:3000/estudiantes
export class EstudiantesController {
    constructor (private readonly estudiantesService: EstudiantesService){}
    //Registrar un nuevo estudiante
    @Post()
    registrarEstudiante(@Body() estudiante:Estudiante, @Res() response: Response,){
       const  estudianteLocal = this.estudiantesService.crearEstudiante(estudiante);
       if (estudianteLocal){
        response.status(201).send(estudianteLocal);
       }else{
        response.status(400).send({error:'ya existe un estudiante con este correo'});
       }
    }
    //Obtener un estudiante según su id
    @Get(':id')
    obtenerEstudiantePorId(@Param('id') id:number, @Res() response: Response){
        const estudiante = this.estudiantesService.obtenerEstudiante(id);
        if(estudiante){
            response.status(200).send(estudiante);
        }else{
            response.status(404).send({error:'Estudiante no existe'})
        }
    }
    //Obtener todos los estudiantes
    @Get()
    obtenerEstudiantes(){
        return this.estudiantesService.obtenerTodosLosEstudiantes();
    }
    //Eliminar un estudiante según su id
    @Delete(':id')
    eliminarEstudiante(@Param('id') id:number){
        this.estudiantesService.eliminarEstudiante(id);
    }
}
