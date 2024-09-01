// Function to add a card to the deck
function addCard(name, image, atk, def) {
    const deckList = document.getElementById('deck-list');

    const deckCard = document.createElement('div');
    deckCard.className = 'deck-card';

    const cardImage = document.createElement('img');
    cardImage.src = `images/${image}`;
    cardImage.alt = name;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerText = 'X';
    removeBtn.onclick = function() {
        deckCard.remove();
    };

    deckCard.appendChild(cardImage);
    deckCard.appendChild(removeBtn);
    deckList.appendChild(deckCard);
}
