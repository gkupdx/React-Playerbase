//// App.js
import { useState } from 'react';
import Navbar from "./components/Navbar.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from './pages/Profile';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [player, setPlayer] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    joined: ''
  });

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
            <Navbar />
            <Landing />
          </>
        } />
        <Route path='/login' element={
          <>
            <Navbar />
            <Login loadPlayer={loadPlayer}/>
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
            <Profile player={player}/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
