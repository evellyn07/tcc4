document.getElementById('reveal-more').addEventListener('click', function() {
    const descricao = document.getElementById('descricao');
    descricao.innerHTML += ' Com mais de 10 anos no mercado, nossa empresa está sempre atualizada com as tendências e as melhores práticas do setor. Nossa visão é tornar o mundo digital mais acessível para todos.';
    this.style.display = 'none';
});

// Captura todas as imagens da galeria
const fotos = document.querySelectorAll('.foto');
const modal = document.getElementById('modal');
const imgModal = document.getElementById('imgModal');
const closeModal = document.getElementById('closeModal');

// Adiciona evento de clique para abrir o modal com a imagem selecionada
fotos.forEach(foto => {
    foto.addEventListener('click', function() {
        modal.style.display = "block";
        imgModal.src = this.dataset.foto; // Define a imagem no modal
    });
});

// Fecha o modal quando o botão "x" é clicado
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

// Fecha o modal se o usuário clicar fora da imagem
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Definindo o tamanho de fonte inicial
document.addEventListener('DOMContentLoaded', () => {
    let fontSize = 16; // tamanho inicial da fonte (em pixels)
    const defaultFontSize = 16; // Tamanho de fonte padrão
  
    // Pegando os botões de ajuste de fonte
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const resetFontButton = document.getElementById('reset-font');
  
    if (increaseFontButton && decreaseFontButton && resetFontButton) {
        // Função para aumentar a fonte
        increaseFontButton.addEventListener('click', () => {
            fontSize += 2; // Aumenta o tamanho da fonte em 2px
            document.body.style.fontSize = fontSize + 'px';
        });
  
        // Função para diminuir a fonte
        decreaseFontButton.addEventListener('click', () => {
            fontSize -= 2; // Diminui o tamanho da fonte em 2px
            if (fontSize >= 10) { // Evita tamanhos muito pequenos
                document.body.style.fontSize = fontSize + 'px';
            }
        });
  
        // Função para restaurar o tamanho da fonte ao padrão
        resetFontButton.addEventListener('click', () => {
            fontSize = defaultFontSize; // Restaura o tamanho de fonte padrão
            document.body.style.fontSize = fontSize + 'px';
        });
    } else {
        console.error('Botões de ajuste de fonte não encontrados!');
    }
  });

  // Exibir o modal de cookies ao carregar a página
window.onload = function() {
    showCookieModal();
  };
  
  // Função para mostrar o modal de cookies
  function showCookieModal() {
    const cookieModal = document.getElementById("cookie-modal");
    cookieModal.classList.add("show");
  }
  
  // Função para aceitar cookies
  function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    closeCookieModal();
    alert("Você aceitou os cookies.");
  }
  
  // Função para recusar cookies
  function declineCookies() {
    localStorage.setItem("cookieConsent", "declined");
    closeCookieModal();
    alert("Você recusou os cookies.");
  }
  
  // Função para fechar o modal
  function closeCookieModal() {
    const cookieModal = document.getElementById("cookie-modal");
    cookieModal.classList.remove("show");
    document.getElementById("cookie-modal").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        alert(`Você clicou em: ${card.querySelector('h3').innerText}`);
      });
    });
  });
  