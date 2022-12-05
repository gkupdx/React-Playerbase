//// Deck.tsx - individual component for a deck
import { FC, useState, useEffect }  from 'react';
import { checkCards } from '../utilities/checkDeckInfoUtil';
import CardHeader from '../components/CardHeader';

interface DeckProps {
    deckName: string,
    cardAdd: boolean,
    cardName: string,
}

const Deck: FC<DeckProps> = ({ deckName, cardAdd, cardName }) => {
    const [deckList, setDeckList] = useState(['']);

    useEffect(() => {
        let cardImgList: string[] | undefined = [];
    
        cardImgList = checkCards(deckName, cardAdd, cardName);
        if (cardImgList) {
            setDeckList(cardImgList);
            // console.log(deckList);
        }
    }, [deckName, cardAdd, cardName, setDeckList]) ;

    return (
        <div className='deck'>
            {/* <p>decklist goes here</p> */}
            {deckList.map((cardImg) => {
                let index = deckList.indexOf(cardImg);
                return <CardHeader key={index} cardHeader={cardImg} />
            })}
        </div>
    )
}

export default Deck;