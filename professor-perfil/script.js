document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const option = document.getElementById('option');

    menuToggle.addEventListener('click', function() {
        option.classList.toggle('active');
    }); 
    
});

   document.getElementById('sair').addEventListener('click', function() {
    // Coloque aqui o código para fechar a página
    window.close(); // Fecha a janela atual
});

   

   