const stars = document.querySelectorAll('.star');
const selectedRating = document.getElementById('selected-rating');
const submitButton = document.getElementById('submit-rating');
const feedback = document.getElementById('feedback');
const gameSelect = document.getElementById('game-select');

let currentRating = 0;
let selectedGame = gameSelect.value;

// Função para destacar as estrelas
function highlightStars(rating) {
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= rating) {
            star.classList.add('selected');  // Adiciona a classe 'selected' que vai deixar as estrelas amarelas
        } else {
            star.classList.remove('selected');
        }
    });
}

// Evento de clique para selecionar a avaliação
stars.forEach(star => {
    star.addEventListener('click', () => {
        currentRating = parseInt(star.getAttribute('data-value'));
        selectedRating.textContent = `${currentRating} estrelas`;
        highlightStars(currentRating);
    });

    // Adicionar um efeito visual quando selected o mouse sobre as estrelas
    star.addEventListener('mouseover', () => {
        let rating = parseInt(star.getAttribute('data-value'));
        highlightStars(rating);
    });

    // Manter a seleção atual após o mouse sair
    star.addEventListener('mouseout', () => {
        highlightStars(currentRating);  // Manter a seleção atual após o mouse sair
    });
});

// Evento para mudar o jogo selecionado
gameSelect.addEventListener('change', () => {
    selectedGame = gameSelect.value;
    selectedRating.textContent = 'Nenhuma avaliação';
    currentRating = 0;
    highlightStars(0);
    feedback.textContent = '';
});

// Evento de submit da avaliação
submitButton.addEventListener('click', () => {
    if (currentRating === 0) {
        feedback.textContent = 'Por favor, selecione uma avaliação antes de enviar!';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = `Obrigado por avaliar ${selectedGame} com ${currentRating} estrelas!`;
        feedback.style.color = '#4CAF50';
        // Aqui você poderia enviar a avaliação para um servidor, por exemplo
        // sendRatingToServer(selectedGame, currentRating);
    }
});

// Função fictícia para enviar a avaliação ao servidor
function sendRatingToServer(game, rating) {
    // Simulação de envio de dados
    console.log(`Avaliação enviada para ${game}: ${rating} estrelas`);
}

