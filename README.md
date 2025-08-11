# Juego de Adivinar el Número en TypeScript

Este proyecto es una versión en **TypeScript** del juego clásico "Adivina el número", basado en el tutorial de MDN Web Docs.

El juego genera un número aleatorio entre **1 y 100**.  
El jugador tiene un máximo de **10 intentos** para adivinarlo.

Después de cada intento:
- El juego indica si el número ingresado es correcto, demasiado alto o demasiado bajo.
- Se muestra un historial con todos los intentos anteriores.

Si el jugador acierta o se queda sin intentos, el juego finaliza y se habilita un botón para reiniciar la partida.

---

## Reglas básicas
1. Se elige un número aleatorio entre **1 y 100** al inicio de la partida.
2. El jugador ingresa un número y pulsa **"Enviar respuesta"**.
3. El juego indica si el número es **correcto**, **demasiado alto** o **demasiado bajo**.
4. El historial de intentos se muestra en pantalla.
5. El juego termina si el jugador acierta o alcanza los **10 intentos**.
6. Al finalizar, se ofrece la opción de **jugar de nuevo**.

---

## Archivos principales
- **index.html** → estructura y contenido de la página.
- **src/main.ts** → código del juego escrito en TypeScript.
- **dist/main.js** → versión compilada a JavaScript para el navegador.
- **tsconfig.json** → configuración del compilador TypeScript.

---

## Diferencias entre la versión en JavaScript y la versión en TypeScript

Este proyecto se basa en un ejemplo originalmente escrito en **JavaScript**, convertido a **TypeScript** para aprovechar el **tipado estático** y la **detección temprana de errores**.

### 1. **Declaración de tipos**
En TypeScript, se especifica el tipo de dato de cada variable y función.

```ts
let randomNumber: number = Math.floor(Math.random() * 100) + 1;
function checkGuess(): void { ... }
