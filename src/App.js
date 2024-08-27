import './App.css';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import Footer from './Component/Footer';
import React, { useState } from 'react';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './Component/Profile';
import LandlordHome from './Component/LandlordHome';
import TenantHome from './Component/TenantHome';
import { UserProvider } from './Component/UserContext';
import Payment from './Component/Payment';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (selectedRole) => {
    setIsLoggedIn(true);
    setRole(selectedRole);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
    navigate('/');
  };

  return (
    <UserProvider>
      <div className="App">
        {!isLoggedIn ? (
          <Home onLogin={handleLogin} />
        ) : (
          <>
            <Header onLogout={handleLogout} role={role} />
            {/* <SearchBar /> */}
            <Routes>
              <Route path='/' element={role === 'landlord' ? <LandlordHome /> : <TenantHome />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/payment' element={<Payment />} />

            </Routes>
            <Footer />
          </>
        )}
      </div>
    </UserProvider>
  );
}

export default App;
