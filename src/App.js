//// App.js
import { useState } from 'react';
import Navbar from "./components/Navbar.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Register from "./pages/Register";
import Profile from './pages/Profile';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [player, setPlayer] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    joined: ''
  });

  const checkLoggedIn = (status) => {
    setLoggedIn(status);
  }

  const loadPlayer = (data) => {
    setPlayer({
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      joined: data.joined
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar loggedIn={loggedIn} />
            <Landing />
          </>
        } />
        <Route path='/login' element={
          <>
            <Navbar loggedIn={loggedIn} />
            <Login loadPlayer={loadPlayer} checkLoggedIn={checkLoggedIn} />
          </>
        } />
        <Route path='/logged-out' element={
          <>
            <Navbar loggedIn={loggedIn} />
            <Logout />
          </>
        } />
        <Route path='/register' element={
          <>
            <Navbar loggedIn={loggedIn}/>
            <Register loadPlayer={loadPlayer}/>
          </>
        } />
        <Route path='/profile/:id' element={
          <>
            <Navbar loggedIn={loggedIn}/>
            <Profile player={player}/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
