import './Appp.css';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import Footer from './Component/Footer';
import React, { useState } from 'react';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomRent from './Component/RoomRent';
import UserProfile from './Component/Profile.js';
import HomePage from './Component/HomePage';
import { UserProvider } from './Component/UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <UserProvider>
      <div className="App">
        {!isLoggedIn ? (
          <Home onLogin={handleLogin} />
        ) : (
          <>
            <Header onLogout={handleLogout} />
            <SearchBar />
            <Routes>
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/' element={<RoomRent />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/logout' element={<Home onLogin={handleLogin} />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </UserProvider>
  );
}

export default App;
