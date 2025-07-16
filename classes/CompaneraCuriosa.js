// classes/CompaneraCuriosa.js
import Chismosa from './Chismosa.js';

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log(`${this.getNombre()}: Hace preguntas aparentemente profesionales a los compañeros de trabajo.`);
        this._modificarReputacion(Math.random() * 0.5); // Pequeño aumento de reputación al ser "profesional"
    }

    contarChisme() {
        console.log(`${this.getNombre()}: Comenta el chisme como ejemplo de vida en el trabajo.`);
        // Gana reputación
        this._modificarReputacion(Math.random() * 1.5 + 0.5); // Gana entre 0.5 y 2 puntos de reputación
        // Pero su chisme sube lento de nivel
        this._modificarNivelChisme(Math.random() * 0.8); // Sube entre 0 y 0.8
    }
}

export default CompaneraCuriosa;