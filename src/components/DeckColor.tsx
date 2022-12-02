//// DeckColor.tsx - component for showing the color icons used in a deck
import { FC, useState, useEffect } from 'react';
import { checkDeckColor } from '../utilities/checkDeckColorUtil';
// import white from '../assets/colors/mtg_white.jpg';
import blue from '../assets/colors/mtg_blue.jpg';
import black from '../assets/colors/mtg_black.jpg';
import red from '../assets/colors/mtg_red.jpg';
// import green from '../assets/colors/mtg_green.jpg';

interface DeckColorProps {
    deckName: string,
}

const DeckColor: FC<DeckColorProps> = ({ deckName }) => {
    const [colorsArray, setColorsArray] = useState(['']);

    useEffect(() => {
        let colorString: string = '';
        colorString = checkDeckColor(deckName);

        if (colorString === 'UBR') {
            setColorsArray([blue, black, red]);
        }
    }, [deckName, setColorsArray]);

    return (
        <div>
            {colorsArray.map((color) => {
                return <img width='25px' height='25px' src={color} alt='Color'/>
            })}
        </div>
    )
}

export default DeckColor;