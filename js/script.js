const preguntas = [
    { texto: "¿Hombre encontrar palo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre agarrar palo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre puntuar palo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre preferir tralalero tralala?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre patear algo?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre tomar cerveza?", respuestaCorrecta: "sí" },
    { texto: "¿Hombre jugar jueguitos?", respuestaCorrecta: "sí" }
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
  
    if (puntos >= 7) {
      mostrarPopup();
      return;
    }
  
    indice = (indice + 1) % preguntas.length;
    mostrarPregunta();
  }
  
  function mostrarPopup() {
    document.getElementById("popup").classList.remove("oculto");
  }
  
  function reiniciarJuego() {
    puntos = 0;
    indice = 0;
    document.getElementById("puntos").textContent = "Puntos: 0";
    document.getElementById("popup").classList.add("oculto");
    mostrarPregunta();
  }
  
  mostrarPregunta();

  let erroresSeguidos = 0;

function responder(respuesta) {
  const preguntaActual = preguntas[indice];

  if (respuesta === preguntaActual.respuestaCorrecta) {
    puntos++;
    erroresSeguidos = 0; // se resetea si contesta bien
  } else {
    puntos--;
    erroresSeguidos++;
  }

  document.getElementById("puntos").textContent = `Puntos: ${puntos}`;

  // Mostrar popup si llega a 7 puntos
  if (puntos === 7) {
    mostrarPopupFeliz();
    return;
  }

  // Mostrar popup triste si hay 2 errores seguidos
  if (erroresSeguidos === 2) {
    mostrarPopupTriste();
    return;
  }

  // Avanza a la siguiente pregunta
  indice = (indice + 1) % preguntas.length;
  mostrarPregunta();
}

function mostrarPopupTriste() {
    const popup = document.getElementById("popupTriste");
    popup.classList.remove("oculto");
  }