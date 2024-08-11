import React from 'react';


export function findCardsByIds(cards, id1, id2, id3) {
   
    return cards.filter((card) => [id1, id2, id3].includes(card.id));
}
