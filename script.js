document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../imgs/IsaiasCurriculo.pdf"; // substitua pelo caminho do seu arquivo
    link.download = "IsaiasCurriculo.pdf"; // substitua pelo nome do arquivo que será baixado
    link.click();
  });

const nome = document.getElementById('nome').value;
const mail = document.getElementById('email').value;
const message = document.getElementById('mensagem').value;
const botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener('click', function() {
  location
});

function handleResize() {
  const isMobile = window.innerWidth < 720;
  const timelineItems = document.querySelectorAll('.timeline-item');
  const linha2 = document.querySelectorAll('.line2');

  linha2.forEach(linha =>{
    if (isMobile) {
      linha.style.display = 'block';
    }
  })

  timelineItems.forEach(item => {
      if (isMobile) {
          item.classList.remove('left', 'right');
      } else {
          item.classList.add('left');
          if (item.classList.contains('right')) {
              item.classList.remove('left');
          }
      }
  });
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);




