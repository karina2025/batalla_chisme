// classes/TiaVecina.js
import Chismosa from './Chismosa.js';

class TiaVecina extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log(`${this.getNombre()}: Aprovecha la reunión del barrio para escuchar discretamente.`);
        // Podría haber un ligero aumento en nivelChisme aquí también
        this._modificarNivelChisme(Math.random() * 0.5); // Aumento menor al recolectar
    }

    contarChisme() {
        console.log(`${this.getNombre()}: Difunde el chisme mientras ofrece café.`);
        // Aumenta mucho el nivel del chisme
        this._modificarNivelChisme(Math.random() * 2 + 1); // Aumenta entre 1 y 3
        // Pero su reputación puede verse afectada si exagera (probabilidad de bajar reputación)
        if (Math.random() > 0.6) { // 40% de probabilidad de afectar reputación
            this._modificarReputacion(-(Math.random() * 1.5)); // Baja entre 0 y -1.5
            console.log(`¡Cuidado! La reputación de ${this.getNombre()} ha bajado por exagerar.`);
        } else {
            this._modificarReputacion(Math.random() * 0.2); // Pequeño aumento o se mantiene
        }
    }
}

export default TiaVecina;