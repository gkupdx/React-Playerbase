//// checkDeckInfoUtil.ts - utility functions for getting the information about a deck
// import React from 'react';
// import * as Scry from 'scryfall-sdk';
// import { grixisMidrange } from "../api/decklists/grixis_midrange";

// type ImageURI = string | undefined; 

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

// export const checkCards = (deckName: string, cardAdd: boolean, cardName: string) => {
//     let imageSrcArray: string[] = [];
//     // separate request arrays of 10 strings per array (as per Scryfall API docs)
//     let reqOne: string[] = [];
//     let reqTwo: string[] = [];
//     let reqThree: string[] = [];
//     let reqFour: string[] = [];
//     let reqFive: string[] = [];
//     let reqSix: string[] = [];

//     const fetchGrixis = (reqNumber: string[]) => {
//         reqNumber.forEach(async (cardName) => {
//             const card = await Scry.Cards.byName(cardName);
//             const imageURI: ImageURI = (card.image_uris?.small);

//             if (imageURI) {
//                 const imageSrc = imageURI.toString();
//                 imageSrcArray.push(imageSrc);
//             }
//         });
//     }

//     if (deckName.includes("Grixis")) {
//         for (let i = 0; i < grixisMidrange.length; ++i) {
//             if (i <= 9) {
//                 reqOne.push(grixisMidrange[i])
//             } else if (i > 9 && i <= 19) {
//                 reqTwo.push(grixisMidrange[i])
//             } else if (i > 19 && i <= 29) {
//                 reqThree.push(grixisMidrange[i])
//             } else if (i > 29 && i <= 39) {
//                 reqFour.push(grixisMidrange[i])
//             } else if (i > 39 && i <= 49) {
//                 reqFive.push(grixisMidrange[i])
//             } else {
//                 reqSix.push(grixisMidrange[i])
//             }
//         }

//         setTimeout(fetchGrixis, 1000);
//     }

//     return imageSrcArray;
// }