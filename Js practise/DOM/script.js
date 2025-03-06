function toggleAllDisplays() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        if (card.style.display === 'block') {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'block';
        }
    });
}
