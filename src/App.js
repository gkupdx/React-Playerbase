//// App.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './utilities/reduxTypesUtil';
import { checkLoginStatus } from './utilities/checkLoginUtil';
import { initPlayer } from './features/player';
import Navbar from "./components/Navbar.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login";
import Account from './pages/Account';
import Logout from './pages/Logout';
import Register from "./pages/Register";
import Profile from './pages/Profile';
import Metagame from './pages/Metagame';
import Success from './pages/Success';
import DeleteAccount from './pages/DeleteAccount';
import Error from './pages/Error';

import { Routes, Route } from 'react-router-dom';

function App() {
  const playerSelector = useSelector((state) => state.player.value);
  const authSelector = useSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  const loadPlayer = (data) => {
    dispatch(initPlayer({ 
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      joined: data.joined
    }));
  }

  // on load, check to see if a user is logged in already
  useEffect(() => {
    checkLoginStatus(dispatch);
  }, [dispatch]);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Landing player={playerSelector} auth={authSelector}/>
          </>
        } />
        <Route path='/login' element={
          <>
            <Navbar />
            <Login loadPlayer={loadPlayer} />
          </>
        } />
        <Route path='/account/:id/update-info' element={
          <>
            <Navbar />
            <Account player={playerSelector} initPlayer={initPlayer} />
          </>
        } />
        <Route path='/logged-out' element={
          <>
            <Navbar />
            <Logout />
          </>
        } />
        <Route path='/register' element={
          <>
            <Navbar />
            <Register loadPlayer={loadPlayer}/>
          </>
        } />
        <Route path='/profile/:id' element={
          <>
            <Navbar />
            <Profile player={playerSelector} />
          </>
        } />
        <Route path='/metagame' element={
          <>
            <Navbar />
            <Metagame />
          </>
        } />
        <Route path='/profile/:id/update-success' element={
          <>
            <Navbar />
            <Success />
          </>
        } />
        <Route path='/account-deleted' element={
          <>
            <Navbar />
            <DeleteAccount />
          </>
        } />
        {/* Error page - for all other routes that DON'T match */}
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
