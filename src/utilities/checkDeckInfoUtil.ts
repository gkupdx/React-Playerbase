//// checkDeckInfoUtil.ts - utility functions for getting the information about a deck
import * as Scry from 'scryfall-sdk';
import { grixisMidrange } from "../api/decklists/grixis_midrange";

type CardImage = string | undefined;

export const checkDeckColor = (deckName: string) => {
    let colors: string = '';

    if (deckName.includes("Grixis")) {
        colors = 'UBR';
    } else if (deckName.includes("Esper")) {
        colors = 'WUB';
    } else if (deckName.includes("Mono-Blue")) {
        colors = 'U';
    } else if (deckName.includes("Azorius")) {
        colors = 'WU';
    }

    return colors;
}

export const checkCards = (deckName: string) => {
    let imageSrcArray: string[] = [''];

    if (deckName.includes("Grixis")) {
        grixisMidrange.forEach(async (cardName) => {
            const card = await Scry.Cards.byName(cardName);
            const imageURI: CardImage = (card.image_uris?.normal);

            if (imageURI) {
                const imageSrc = imageURI.toString();
                imageSrcArray.push(imageSrc);
            }
        })
    }

    return imageSrcArray;
}