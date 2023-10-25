let clickCount = 0;
const button = document.getElementById('buttons'); // Substitua 'seuBotao' pelo ID do seu botão

function moveButton() {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    if (clickCount === 0) {
        // Clique 1: Mova o botão para o canto inferior direito
        button.style.transform = `translate(${pageWidth - 150}px, ${pageHeight - 150}px)`;
    } else if (clickCount === 1) {
        // Clique 2: Mova o botão para cima
        button.style.transform = 'translate(0, -150px)';
    } else if (clickCount === 2) {
        // Clique 3: Mova o botão para o canto esquerdo
        button.style.transform = 'translate(-150px, 0)';
    } else if (clickCount === 3) {
        // Clique 4: Mova o botão para o canto superior direito
        button.style.transform = `translate(${pageWidth - 150}px, 0)`;
    } else if (clickCount === 4) {
        // Clique 5: Mova o botão para o lado direito
        button.style.transform = `translate(${pageWidth - 150}px, ${pageHeight / 2 - 75}px)`;
    } else if (clickCount === 5) {
        // Clique 6: Mova o botão para o canto superior esquerdo
        button.style.transform = 'translate(-150px, -150px)';
    } else if (clickCount === 6) {
        // Clique 7: Mova o botão para o lado de baixo da página
        button.style.transform = `translate(${pageWidth - 150}px, ${pageHeight - 150}px)`;
    } else if (clickCount === 7) {
        // Clique 8: Mova o botão para o lado esquerdo
        button.style.transform = 'translate(0, -150px)';
    } else if (clickCount === 8) {
        // Clique 9: Mova o botão para o canto superior direito
        button.style.transform = 'translate(-150px, 0)';
    } else if (clickCount === 9) {
        // Clique 10: Volte o botão para o centro
        button.style.transform = 'translate(0, 0)';
        setTimeout(function() {
            window.location.href = 'eu-te-amo.html';
        }, 1000);
    }
    
    clickCount = (clickCount + 1) % 10;
}
function showRejection() {
    window.location.href = 'rejeição.html';
}