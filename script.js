// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mensagem de Boas-Vindas Dinâmica baseada no Horário
    const saudarUsuario = () => {
        const hora = new Date().getHours();
        let saudacao = "";

        if (hora >= 5 && hora < 12) {
            saudacao = "Bom dia!";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde!";
        } else {
            saudacao = "Boa noite!";
        }

        console.log(`${saudacao} Bem-vindo ao projeto Agrinho 2026: Agro forte, futuro sustentável.`);
    };

    // 2. Navegação Suave ao clicar nos links do Menu
    const linksMenu = document.querySelectorAll("nav a");

    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault(); // Evita o pulo brusco na página
            
            const idAlvo = link.getAttribute("href");
            const secaoAlvo = document.querySelector(idAlvo);

            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: "smooth" // Efeito de rolagem suave
                });
            }
        });
    });

    // 3. Efeito Visual Interativo nos Artigos de Práticas Sustentáveis
    const artigos = document.querySelectorAll("article");

    artigos.forEach(artigo => {
        // Quando o mouse entra no artigo
        artigo.addEventListener("mouseenter", () => {
            artigo.style.backgroundColor = "#eaf2eb"; // Muda para um verde bem suave
            artigo.style.transform = "translateX(5px)"; // Desloca levemente para a direita
            artigo.style.transition = "all 0.3s ease"; // Suaviza a transição
        });

        // Quando o mouse sai do artigo
        artigo.addEventListener("mouseleave", () => {
            artigo.style.backgroundColor = "#f9fbf9"; // Volta à cor original do CSS
            artigo.style.transform = "translateX(0)"; // Volta à posição original
        });
    });

    // Executa a saudação inicial
    saudarUsuario();
});
