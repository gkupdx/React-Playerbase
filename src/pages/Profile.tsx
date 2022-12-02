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
import DeckContainer from '../components/DeckContainer';
import Card from '../components/Card';
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

type CardImage = string | undefined; // utility type to work with Scryfall-SDK image URIs

const Profile: FC<ProfileProps> = ({ player }) => {
    const [toggleSettings, setToggleSettings] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [searchBoxInput, setSearchBoxInput] = useState('');
    const [cardImage, setCardImage] = useState('');
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

    const onCardInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBoxInput(event.target.value);
    }

    const onCardSearch = async () => {
        try {
            const card = await Scry.Cards.byName(searchBoxInput);
            const imageURI: CardImage = (card.image_uris?.normal);

            if (imageURI) {
                const imageSrc = imageURI.toString();
                setCardImage(imageSrc);
            }
        } catch (error) {
            setCardImage("Not Found");
        }
    }

    // check to see if a user is logged in on page refresh
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

            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.6 }} className='headerContainer'>
                <h1>Welcome back, {player.username}!</h1>
            </motion.div>

            <div className='container'>
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} className='cardSearchBox'>
                    <div>
                        <label htmlFor="searchBox">Search for a card to add:</label>
                        <input onChange={onCardInputChange} type="text" placeholder="Enter exact card name..." />
                        <button onClick={onCardSearch}>Search</button>
                        <p>Tip: Don't forget to include commas!</p>
                    </div>

                    <div className='cardPreview'>
                        {cardImage && <Card cardImage={cardImage}/>}
                        {cardImage === '' && <span>A preview of your card will appear here</span>}
                        {cardImage === 'Not Found' && <span>Something went wrong. Please check to make sure the spelling is correct.</span>}
                    </div>

                    <button>Add To Deck</button>
                </motion.div>

                <DeckContainer deckName={'Grixis Midrange'}/>
            </div>

        </div>
    )
}

export default Profile;