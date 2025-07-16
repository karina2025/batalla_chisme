// index.js
import chalk from 'chalk';
import TiaVecina from './classes/TiaVecina.js';
import CompaneraCuriosa from './classes/CompaneraCuriosa.js';
import EstudianteEspia from './classes/EstudianteEspia.js';

console.log(chalk.bold.yellowBright('¡Comienza la Batalla de Chismes!\n'));

// Crear un arreglo de diferentes tipos de chismosas
const chismosas = [
    new TiaVecina('Doña Florinda', 7, 6),
    new CompaneraCuriosa('Laura La Oficina', 8, 4),
    new EstudianteEspia('El Brayan del Último Puesto', 4, 7),
    new TiaVecina('La Vecina Metida', 6, 5)
];

const NUM_RONDAS = 3; // Simular al menos 2 rondas

for (let ronda = 1; ronda <= NUM_RONDAS; ronda++) {
    console.log(`\n${chalk.bgCyanBright.black(`--- RONDA ${ronda} ---`)}`);
    chismosas.forEach(chismosa => {
        console.log(`\n${chalk.bold.blue(chismosa.getNombre())}:`);
        chismosa.recolectarInfo();
        chismosa.contarChisme();
    });
}

console.log(`\n${chalk.bgYellow.black('--- RESULTADOS FINALES DE LA BATALLA DE CHISMES ---')}`);

let chismeMasViral = null;
let maxNivelChisme = -1;

chismosas.forEach(chismosa => {
    const nombre = chismosa.getNombre();
    const reputacion = chismosa.getReputacion();
    const nivelChisme = chismosa.getNivelChisme();

    let reputacionColor;
    if (reputacion > 7) {
        reputacionColor = chalk.rgb(255, 140, 0); // Naranja
    } else if (reputacion < 3) {
        reputacionColor = chalk.black; // Negro
    } else {
        reputacionColor = chalk.white; // Blanco por defecto
    }

    let nivelChismeColor;
    if (nivelChisme > 7) {
        nivelChismeColor = chalk.magenta; // Morado
    } else {
        nivelChismeColor = chalk.white; // Blanco por defecto
    }

    console.log(
        `${nombre}:\n` +
        `  Reputación: ${reputacionColor(reputacion.toFixed(2))}\n` +
        `  Nivel de Chisme: ${nivelChismeColor(nivelChisme.toFixed(2))}`
    );

    if (nivelChisme > maxNivelChisme) {
        maxNivelChisme = nivelChisme;
        chismeMasViral = chismosa;
    }
});

console.log('\n--- Ganador del Chisme Más Viral ---');
if (chismeMasViral) {
    console.log(chalk.bold.bgMagentaBright.white(
        `¡${chismeMasViral.getNombre()} tiene el chisme más viral con un nivel de ${chismeMasViral.getNivelChisme().toFixed(2)}!`
    ));
} else {
    console.log('No se pudo determinar el chisme más viral.');
}

console.log(chalk.bold.yellowBright('\n¡Fin de la Batalla de Chismes!'));