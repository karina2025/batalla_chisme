# batalla_chisme

## Descripción del Proyecto

Este proyecto simula una "batalla de chismes" entre diferentes tipos de "reinas del chisme", donde cada una recolecta información y difunde rumores con su estilo único. El objetivo es determinar cuál de ellas logra hacer que su chisme sea el más viral, mientras se gestiona su reputación en el proceso.

El sistema está modelado utilizando Programación Orientada a Objetos (POO) en JavaScript, aplicando conceptos como clases abstractas, herencia, encapsulamiento y polimorfismo.

## Estructura del Proyecto
batalla-chismes/
├── classes/
│   ├── Chismosa.js
│   ├── TiaVecina.js
│   ├── CompaneraCuriosa.js
│   └── EstudianteEspia.js
├── index.js
├── package.json
├── .gitignore
└── README.md

## Clases Principales

### `Chismosa` (Clase Abstracta)

Es la clase base para todas las chismosas. Define el comportamiento común y las propiedades fundamentales.
* **Propiedades privadas:** `#reputacion`, `#nivelChisme`.
* **Métodos abstractos:** `recolectarInfo()`, `contarChisme()` (deben ser implementados por las subclases).
* **Getters:** `getReputacion()`, `getNivelChisme()`, `getNombre()`.
* **Reglas:** No puede ser instanciada directamente. Lanza un error si los métodos abstractos no son sobreescritos. Los valores de reputación y nivel de chisme se mantienen en el rango de 0 a 10.

### `TiaVecina` (Subclase de `Chismosa`)

* **Estilo:** Aprovecha reuniones de barrio para recolectar información y difunde el chisme mientras ofrece café.
* **Efecto:** Aumenta considerablemente el nivel del chisme, pero su reputación puede verse afectada si exagera demasiado.

### `CompaneraCuriosa` (Subclase de `Chismosa`)

* **Estilo:** Hace preguntas aparentemente profesionales para recolectar información y comenta el chisme como un "ejemplo de vida" en el trabajo.
* **Efecto:** Gana reputación debido a su enfoque "profesional", pero el nivel de su chisme sube de forma más lenta.

### `EstudianteEspia` (Subclase de `Chismosa`)

* **Estilo:** Lee chats ajenos desde el último puesto del salón para recolectar información y filtra el chisme por estados de WhatsApp.
* **Efecto:** Su nivel de chisme sube muy rápido, pero corre el riesgo de perder reputación si es descubierta.

## Reglas de la Batalla

* **Nivel de Chisme:** Varía de 0 a 10.
* **Reputación:** Varía de 0 a 10.
* **Simulación:** La batalla se simula en varias rondas, donde cada chismosa recolecta y cuenta chismes, afectando sus estadísticas.
* **Aleatoriedad:** Se utiliza `Math.random()` para introducir un factor de aleatoriedad en las modificaciones de reputación y nivel de chisme.
* **Ganador:** El chisme más viral es aquel con el `nivelChisme` más alto al final de todas las rondas.

## Instalación y Ejecución

Para poner en marcha la "Batalla de Chismes", sigue estos sencillos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone 
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd batalla_chisme # O el nombre que tenga tu carpeta raíz
    ```

3.  **Instalar dependencias:**
    El proyecto utiliza `chalk` para formatear la salida en la consola. Instálalo junto con otras dependencias de Node.js:
    ```bash
    npm install
    ```

4.  **Ejecutar la batalla de chismes:**
    ```bash
    npm start
    ```
    Esto iniciará la simulación y mostrará los resultados en la terminal.

## Salida de la Consola

La aplicación utilizará la librería `chalk` para formatear la salida:
* 🟣 **Morado:** Para chismes considerados "virales" (nivel alto).
* 🟠 **Naranja:** Para chismosas con "reputación alta".
* ⚫ **Negro:** Para chismosas con "reputación baja" o "canceladas".

## Desarrollado por

KARINA ARGENIS SANABRIA CASAS
