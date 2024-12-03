document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const mainContent = document.querySelector('.main-content');
  
    // Controle de modo claro e escuro
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitch.checked = true;
        }
    }
  
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
  
    // Controle de tamanho de fonte
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const resetFontBtn = document.getElementById('reset-font');
    let currentFontSize = 16; // Tamanho inicial padrão em pixels
  
    increaseFontBtn.addEventListener('click', () => {
        currentFontSize += 2;
        mainContent.style.fontSize = `${currentFontSize}px`;
    });
  
    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > 12) { // Limite mínimo de fonte
            currentFontSize -= 2;
            mainContent.style.fontSize = `${currentFontSize}px`;
        }
    });
  
    resetFontBtn.addEventListener('click', () => {
        currentFontSize = 16; // Tamanho padrão
        mainContent.style.fontSize = `${currentFontSize}px`;
    });
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
