// classes/EstudianteEspia.js
import Chismosa from './Chismosa.js';

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log(`${this.getNombre()}: Lee chats ajenos desde el último puesto del salón.`);
        this._modificarNivelChisme(Math.random() * 1); // Pequeño aumento de nivel al recolectar info oculta
    }

    contarChisme() {
        console.log(`${this.getNombre()}: Filtra el chisme por estados en WhatsApp.`);
        // Su nivel de chisme sube rápido
        this._modificarNivelChisme(Math.random() * 2.5 + 0.5); // Sube entre 0.5 y 3
        // Pero puede perder reputación si es descubierta (alta probabilidad)
        if (Math.random() > 0.4) { // 60% de probabilidad de ser descubierta
            this._modificarReputacion(-(Math.random() * 2 + 0.5)); // Baja entre 0.5 y 2.5
            console.log(`¡Oh no! ${this.getNombre()} ha sido descubierta y su reputación ha caído.`);
        } else {
            this._modificarReputacion(Math.random() * 0.1); // Pequeño o nulo cambio
        }
    }
}

export default EstudianteEspia;