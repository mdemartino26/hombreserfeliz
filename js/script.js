const preguntas = [
    { texto: "¿Hombre encontrar palo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre agarrar palo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre puntuar palo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre preferir tralalero tralala?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre patear algo?", respuestaCorrecta: "sí" }
  ];
  
  let indice = 0;
  let puntos = 0;
  
  function mostrarPregunta() {
    const pregunta = preguntas[indice];
    document.getElementById("pregunta").textContent = pregunta.texto;
  }
  
  function responder(respuesta) {
    const preguntaActual = preguntas[indice];
    if (respuesta === preguntaActual.respuestaCorrecta) {
      puntos++;
    } else {
      puntos--;
    }
  
    document.getElementById("puntos").textContent = `Puntos: ${puntos}`;
  
    // Avanza a la siguiente pregunta o vuelve al inicio
    indice = (indice + 1) % preguntas.length;
    mostrarPregunta();
  }
  
  mostrarPregunta();