document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as imagens vindas da IA
    const imagensIA = document.querySelectorAll('.ia-image-banner, .ia-image-content');
    
    // Exemplo: Adiciona um efeito de fade-in assim que a página carrega
    imagensIA.forEach(img => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1s ease-in-out";
        
        // Garante a transição após o carregamento
        setTimeout(() => {
            img.style.opacity = "1";
        }, 100);
    });
});
