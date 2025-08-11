Juego de Adivinar el Número en TypeScript
Este proyecto es una versión en TypeScript del juego clásico "Adivina el número", basado en el tutorial de MDN Web Docs.

El juego genera un número aleatorio entre 1 y 100. El jugador tiene un máximo de 10 intentos para adivinarlo.
Después de cada intento, el juego indica si el número ingresado es correcto, demasiado alto o demasiado bajo.
Además, muestra un historial con todos los intentos anteriores.
Si el jugador acierta o se queda sin intentos, el juego finaliza y se habilita un botón para reiniciar la partida.

Reglas básicas:

Se elige un número aleatorio entre 1 y 100 al inicio de la partida.

El jugador ingresa un número y pulsa "Enviar respuesta".

El juego indica si el número es correcto, demasiado alto o demasiado bajo.

El historial de intentos se muestra en pantalla.

El juego termina si el jugador acierta o alcanza los 10 intentos.

Al finalizar, se ofrece la opción de jugar de nuevo.

Archivos principales:

index.html: estructura y contenido de la página.

src/main.ts: código del juego escrito en TypeScript.

dist/main.js: versión compilada a JavaScript para el navegador.

tsconfig.json: configuración del compilador TypeScript.
