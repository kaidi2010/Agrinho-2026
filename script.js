document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os elementos de flashcard da página
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        // Escuta o evento de clique do usuário
        card.addEventListener("click", () => {
            // Alterna a classe 'flipped' no card clicado
            card.classList.toggle("flipped");
        });
    });

});

