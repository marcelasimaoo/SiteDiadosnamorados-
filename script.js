function toggleMusica() {
  const audio = document.getElementById('musica');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function iniciarChuvaDeAmor() {
  const chuva = document.getElementById('chuva');

  setInterval(() => {
    const coracao = document.createElement('span');
    coracao.className = 'coração-caindo';
    coracao.innerText = Math.random() < 0.5 ? "❤️" : "💖";

    coracao.style.position = "absolute";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-30px";
    coracao.style.fontSize = (Math.random() * 20 + 24) + "px";
    coracao.style.animation = "cair 5s linear forwards";
    coracao.style.opacity = "0.9";
    coracao.style.zIndex = "1000";
    coracao.style.pointerEvents = "none";

    chuva.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }, 300);
}


function esconderTodos() {
  document.getElementById('mensagem-secreta').classList.add('oculto');
  document.getElementById('portal-alasca').classList.add('oculto');
}


function mostrarMensagem() {
  esconderTodos();
  const mensagem = document.getElementById('mensagem-secreta');
  mensagem.classList.remove('oculto');
  mensagem.scrollIntoView({ behavior: "smooth", block: "center" });
}


function abrirPortalDoAlasca() {
  esconderTodos();
  const portal = document.getElementById('portal-alasca');
  portal.classList.remove('oculto');
  portal.scrollIntoView({ behavior: "smooth", block: "center" });
}
