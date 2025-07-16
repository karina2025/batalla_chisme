// classes/Chismosa.js
class Chismosa {
    #nombre;
    #reputacion;
    #nivelChisme;

    constructor(nombre, reputacion = 5, nivelChisme = 5) {
        if (new.target === Chismosa) {
            throw new Error("La clase Chismosa es abstracta y no puede ser instanciada directamente.");
        }

        this.#nombre = nombre;
        this.#reputacion = Math.max(0, Math.min(10, reputacion)); // Asegura que esté entre 0 y 10
        this.#nivelChisme = Math.max(0, Math.min(10, nivelChisme)); // Asegura que esté entre 0 y 10

        // Validar que los métodos abstractos sean implementados por las subclases
        if (typeof this.recolectarInfo !== 'function' || typeof this.contarChisme !== 'function') {
            throw new Error("Las subclases de Chismosa deben implementar los métodos recolectarInfo() y contarChisme().");
        }
    }

    // Métodos abstractos (simulados)
    recolectarInfo() {
        throw new Error("Método 'recolectarInfo()' debe ser implementado por la subclase.");
    }

    contarChisme() {
        throw new Error("Método 'contarChisme()' debe ser implementado por la subclase.");
    }

    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    getNombre() {
        return this.#nombre;
    }

    // Métodos para modificar reputación y nivel de chisme
    // Aseguran que los valores se mantengan en el rango [0, 10]
    _modificarReputacion(cambio) {
        this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + cambio));
    }

    _modificarNivelChisme(cambio) {
        this.#nivelChisme = Math.max(0, Math.min(10, this.#nivelChisme + cambio));
    }
}

export default Chismosa;