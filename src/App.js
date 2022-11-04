//// App.js
import Navbar from "./components/Navbar.tsx";
import Landing from "./pages/Landing.tsx";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Landing />
          </>
        } />
        
      </Routes>
    </div>
  );
}

export default App;
