//// Profile.tsx - profile page
import { VscGear } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';
import React, { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../features/authenticate';
import { initPlayer } from '../features/player';
import { checkPageRefresh } from '../utilities/checkLoginUtil';

import * as Scry from 'scryfall-sdk';
import ProfileMenu from '../components/ProfileMenu';
import DeckContainer from '../components/DeckContainer';
import CardSearchBox from '../components/CardSearchBox';
import '../stylesheets/profile.css';

interface ProfileProps {
    player: {
        id: number,
        name: string,
        username: string,
        email: string,
        joined: string
    },
}

type ImageURI = string | undefined; // utility type to work with Scryfall-SDK image URIs

const Profile: FC<ProfileProps> = ({ player }) => {
    const [toggleMenu, setToggleMenu] = useState('home');
    const [toggleSettings, setToggleSettings] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [searchBoxInput, setSearchBoxInput] = useState("");
    const [cardImage, setCardImage] = useState("");
    const [cardList, setCardList] = useState([{
        id: 0,
        cardName: "",
        cardImageUri: "",
        count: 0,
    }]);
    const [cardCount, setCardCount] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleLogOut = () => {
        localStorage.removeItem("LOGGED_IN");
        dispatch(initPlayer({
            id: 0,
            name: '',
            username: '',
            email: '',
            joined: ''
        }));
        dispatch(authenticateUser({ authenticated: 0 }));

        navigate('/logged-out');
    }

    const handleDeletion = () => {
        fetch('http://localhost:3000/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: player.email
            })
        })
            .then(res => res.json())
            .then(success => {
                localStorage.removeItem("LOGGED_IN");
                initPlayer({
                    id: 0,
                    name: '',
                    username: '',
                    email: '',
                    joined: '',
                });
                dispatch(authenticateUser({ authenticated: 0 }));

                navigate('/account-deleted')
            })
            .catch(error => console.log(error))
    }

    const onMenuCardClick = (value: string) => {
        let type = '';

        if (value === 'build') {
            type = 'build';
        } else if (value === 'view') {
            type = 'view';
        } else {
            type = 'metagame';
        }

        setToggleMenu(type);
    }

    const onCardInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // capitalizing the first letter of each word
        let inputString = event.target.value.toLowerCase().split(' ');
        for (let i = 0; i < inputString.length; ++i) {
            inputString[i] = inputString[i].charAt(0).toUpperCase() + inputString[i].substring(1);
        }

        setSearchBoxInput(inputString.join(' '));
    }

    const onCardSearch = async () => {
        try {
            const card = await Scry.Cards.byName(searchBoxInput);
            const imageURI: ImageURI = (card.image_uris?.normal);

            if (imageURI) {
                const imageSrc = imageURI.toString();
                setCardImage(imageSrc);
            }
        } catch {
            setCardImage("Not Found");
        }
    }

    const onCardAdd = () => {
        // check to make sure the searched card exists & is successfully displayed
        if (cardImage !== "Not Found" && cardImage !== '') {
            // check to see if card list is in default state (ie. empty)
            if (cardList[0].id === 0) {
                setCardList([{
                    id: 1,
                    cardName: searchBoxInput,
                    cardImageUri: cardImage,
                    count: 1,
                }]);
            } else if (cardCount === 60) { // check to see if all 60 card slots have been used
                console.log("Sorry, your deck has already reached the max card limit of 60 cards. Please remove some cards & try again.");
            } else {
                const newCardId = Math.floor(Math.random() * 10000); // need to fix this later
                const newCard = {
                    id: newCardId,
                    cardName: searchBoxInput,
                    cardImageUri: cardImage,
                    count: 1,
                }

                cardList.forEach((card: React.ComponentState) => {
                    // check to see if card already exists in deck
                    // if yes, increase the count if count < 4
                    if (newCard.cardName === card.cardName && card.count < 4) {
                        card.count += 1;
                        setCardList([...cardList]);
                    } else if (newCard.cardName === card.cardName && card.count === 4) { // if count === 4, do nothing
                        setCardList([...cardList]);
                    } else { // if new card, add card to list
                        setCardList([...cardList, newCard]);
                    }
                });
            }
        }
    }

    /** NEED TO WORK ON THIS **/
    // const onCardDelete = (toDelete: string) => {
    //     -> Step 1: filter for card to delete
    //     -> Step 2: check the count value (if count > 0, subtract 1; else, remove from list)
    // 
    //     const updatedList = cardList.filter(card => card.cardName === toDelete);
    //     setCardList(updatedList);
    // }

    /** keeps track of card count in deck **/
    useEffect(() => {
        let total = 0;

        cardList.forEach((card: React.ComponentState) => {
            total += card.count;
        });

        setCardCount(total);
    }, [cardList]);

    /** check to see if a user is logged in on page refresh **/
    useEffect(() => {
        checkPageRefresh(dispatch, navigate, id);
    }, [dispatch, navigate, id]);

    return (
        <div className='profile'>
            <motion.button animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} onClick={() => setToggleSettings(!toggleSettings)} className='settingsBtn'><VscGear style={{ fontSize: '1.4rem' }} />
                Settings
            </motion.button>
            <AnimatePresence>
                {toggleSettings &&
                    <motion.div
                        className='settingsModal'
                        animate={{ x: -200 }}
                        initial={{ x: 200 }}
                        transition={{ type: "tween", duration: 0.5 }}
                        exit={{ x: 200 }}>

                        <button onClick={() => navigate(`/account/${player.id}/update-info`)}>Update Login Password</button>
                        <button onClick={handleLogOut}>Log Out</button>
                        <button onClick={() => setDeleteModal(true)}>Delete Account (PERMANENT)</button>
                        <AnimatePresence>
                            {deleteModal &&
                                <motion.div
                                    className='deleteModal'
                                    animate={{ x: -200 }}
                                    initial={{ x: 200 }}
                                    transition={{ type: "tween", duration: 0.5 }}
                                    exit={{ x: 200 }}>

                                    <h3>Are you sure you want to delete your account?</h3>
                                    <p>Please note that this is an IRREVERSIBLE change.</p>
                                    <button onClick={handleDeletion}>DELETE</button>
                                    <button onClick={() => setDeleteModal(false)}>Cancel</button>
                                </motion.div>
                            }</AnimatePresence>
                    </motion.div>}
            </AnimatePresence>

            {/* "Welcome, player_username" */}
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.6 }} className='headerContainer'>
                <h1>Welcome back, {player.username}!</h1>
            </motion.div>

            <div className='container'>
                {toggleMenu === 'home' ?
                    <ProfileMenu onMenuCardClick={onMenuCardClick} />
                    :
                    <>
                        <button style={{ width: '100px', height: '50px' }} onClick={() => setToggleMenu('home')}>Back to Menu</button>
                        <CardSearchBox cardImage={cardImage} onCardInputChange={onCardInputChange} onCardSearch={onCardSearch} onCardAdd={onCardAdd} />
                        <DeckContainer deckName={'Grixis Midrange'} cardList={cardList} cardCount={cardCount} />
                    </>
                }
            </div>

            {/* Card search + add feature & visible deck list */}
            {/* <div className='container'>
                <CardSearchBox cardImage={cardImage} onCardInputChange={onCardInputChange} onCardSearch={onCardSearch} onCardAdd={onCardAdd} />

                <DeckContainer deckName={'Grixis Midrange'} cardList={cardList} cardCount={cardCount}/>
            </div> */}

        </div>
    )
}

export default Profile;