// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del sol iluminaba la esquina (la esquina)", time: 31 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 38 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 45 },

  { text: "Que vendría a buscarla, con sus flores amarillas", time: 60 },
  { text: "No te apures no detengas, el instante del encuentro", time: 67 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 75 },
  { text: "No te olvides, que la vida", time: 83 },

  { text: "Casi nunca está dormida", time: 99 },
  { text: "En ese bar tan desierto los esperaba el encuentro (el encuentro)", time: 105 },
  { text: "Ella llegó en limosina amarilla por supuesto", time: 113 },
  { text: "Él se acercó de repente y la miró tan de frente (de frente)", time: 121 },

  { text: "Toda una vida soñada y no pudo decir nada", time: 137 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 144 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 152 },
  { text: "No te apures no detengas, el instante del encuentro", time: 160 },

  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 177 },
  { text: "No te olvides, que la vida", time: 185 },
  { text: "Casi nunca está dormida", time: 193 },

  { text: "Ella sabía que él sabía, que algún día pasaría", time: 205 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 213 },
  { text: "No te apures no detengas, el instante del encuentro", time: 221 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 229 },
];




// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
