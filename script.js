// Garante que o código só rode após o HTML estar completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script Agrinho 2026 inicializado com sucesso!");
    
    // Inicialização das funções dinâmicas
    inicializarMenuMobile();
    inicializarValidacaoFormulario();
    inicializarAnimacaoScroll();
});

/**
 * 1. MENU RESPONSIVO (INTERATIVIDADE)
 * Controla a abertura e fechamento do menu em dispositivos móveis.
 */
function inicializarMenuMobile() {
    const proximoBotaoMenu = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    // Verifica se os elementos existem na página antes de aplicar o evento
    if (proximoBotaoMenu && navMenu) {
        proximoBotaoMenu.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            proximoBotaoMenu.classList.toggle("open");
        });
    }
}

/**
 * 2. VALIDAÇÃO DE FORMULÁRIO (INTELIGÊNCIA E SEGURANÇA)
 * Valida o formulário de contato ou inscrição do projeto Agrinho.
 */
function inicializarValidacaoFormulario() {
    const formulario = document.querySelector("#form-agrinho");

    if (formulario) {
        formulario.addEventListener("submit", (event) => {
            // Impede o envio padrão para fazermos a validação primeiro
            event.preventDefault();

            const campoNome = document.querySelector("#nome");
            const campoEmail = document.querySelector("#email");
            const campoMensagem = document.querySelector("#mensagem");
            
            let formularioValido = true;

            // Validação simples de campos vazios
            if (campoNome && campoNome.value.trim() === "") {
                mostrarErro(campoNome, "Por favor, digite seu nome.");
                formularioValido = false;
            } else {
                limparErro(campoNome);
            }

            if (campoEmail && !validarEmail(campoEmail.value)) {
                mostrarErro(campoEmail, "Por favor, insira um e-mail válido.");
                formularioValido = false;
            } else {
                limparErro(campoEmail);
            }

            // Se tudo estiver correto, simula o envio
            if (formularioValido) {
                alert("Obrigado pelo contato! Sua mensagem sobre o Agrinho 2026 foi enviada.");
                formulario.reset();
            }
        });
    }
}

// Funções auxiliares de validação
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarErro(input, mensagem) {
    input.classList.add("input-error");
    // Exemplo: você pode usar um elemento de texto no HTML para mostrar a mensagem
    console.warn(`Erro no campo ${input.id}: ${mensagem}`);
}

function limparErro(input) {
    input.classList.remove("input-error");
}

/**
 * 3. ANIMAÇÃO AO SCROLL (EXPERIÊNCIA DO USUÁRIO)
 * Faz elementos surgirem suavemente conforme o usuário rola a página.
 */
function inicializarAnimacaoScroll() {
    const elementosAnimados = document.querySelectorAll(".animar-scroll");

    if (elementosAnimados.length > 0) {
        const checarScroll = () => {
            elementosAnimados.forEach((elemento) => {
                const elementoTopo = elemento.getBoundingClientRect().top;
                const alturaJanela = window.innerHeight * 0.85; // Dispara a animação um pouco antes do elemento centralizar

                if (elementoTopo < alturaJanela) {
                    elemento.classList.add("elemento-visivel");
                }
            });
        };

        // Executa uma vez ao carregar e depois a cada rolagem
        checarScroll();
        window.addEventListener("scroll", checarScroll);
    }
}
