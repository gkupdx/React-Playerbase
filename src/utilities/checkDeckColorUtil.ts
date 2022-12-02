//// checkDeckColorUtil.ts - utility function for checking the colors used in a deck

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