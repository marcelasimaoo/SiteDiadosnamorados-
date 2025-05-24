const musica = document.getElementById("musica");
const playPauseBtn = document.getElementById("playPauseBtn");
let tocando = false;

playPauseBtn.onclick = () => {
  if (!tocando) {
    musica.play();
    playPauseBtn.textContent = "⏸️ Pausar Música";
  } else {
    musica.pause();
    playPauseBtn.textContent = "🎵 Tocar Música";
  }
  tocando = !tocando;
};

function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem-secreta");
  mensagem.classList.toggle("mostrar");
}

function iniciarChuvaDeAmor() {
  const chuva = document.getElementById("chuva");
  chuva.classList.add("ativa");

  setInterval(() => {
    const frase = document.createElement("div");
    frase.textContent = "eu te amo 💖";
    frase.classList.add("frase-amor");
    frase.style.left = `${Math.random() * 100}vw`;
    frase.style.fontSize = `${Math.random() * 20 + 10}px`;
    frase.style.animationDuration = `${Math.random() * 3 + 3}s`;
    chuva.appendChild(frase);

    setTimeout(() => {
      frase.remove();
    }, 6000);
  }, 120);
}

function mostrarPresente() {
  const presente = document.getElementById("presente-container");
  presente.classList.toggle("mostrar");
}
