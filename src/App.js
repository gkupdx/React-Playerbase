//// App.js
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from "./components/Navbar.tsx";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Register from "./pages/Register";
import Profile from './pages/Profile';

import { Routes, Route } from 'react-router-dom';

function App() {
  const authSelector = useSelector((state) => state.auth.value);
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
            <Navbar userID={authSelector.authenticated}/>
            <Landing />
          </>
        } />
        <Route path='/login' element={
          <>
            <Navbar userID={authSelector.authenticated}/>
            <Login loadPlayer={loadPlayer} />
          </>
        } />
        <Route path='/logged-out' element={
          <>
            <Navbar userID={authSelector.authenticated}/>
            <Logout />
          </>
        } />
        <Route path='/register' element={
          <>
            <Navbar userID={authSelector.authenticated}/>
            <Register loadPlayer={loadPlayer}/>
          </>
        } />
        <Route path='/profile/:id' element={
          <>
            <Navbar userID={authSelector.authenticated}/>
            <Profile player={player} setPlayer={setPlayer}/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
