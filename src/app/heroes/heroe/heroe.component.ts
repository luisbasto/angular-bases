import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 45;

    obtenerNombre(){
        return ` ${this.nombre} - ${this.edad}`;
    }

    obtenerNombreCapitalizado(){
        return ` ${this.nombre.toUpperCase()} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = "Spiderman";
    }

    cambiarEdad():void{
        this.edad = 35;
    }

}