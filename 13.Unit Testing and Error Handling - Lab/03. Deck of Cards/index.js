function deckOfCards(cards) {
  function createCard(face, suit) {
    const validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const validSuits = ["S", "H", "D", "C"];
    if (!validFaces.includes(face) || !validSuits.includes(suit)) {
      console.log(`Invalid card: ${face}${suit}`);
      return null;
    }
    const card = {
      face: face,
      suit: suit,
      toString: function () {
        const suitToChar = {
          S: "\u2660",
          H: "\u2665",
          D: "\u2666",
          C: "\u2663",
        };
        return `${this.face}${suitToChar[this.suit]}`;
      },
    };
    return card;
  }

  const result = [];
  for (const card of cards) {
    const face = card.slice(0, -1);
    const suit = card.slice(-1);
    const newCard = createCard(face, suit);
    if (newCard) {
      result.push(newCard.toString());
    }
  }
  console.log(result.join(" "));
}
