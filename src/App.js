import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TenentHeader from './Component/TenentHeader.js';
import LandlordHeader from './Component/LandlordHeader.js';
import Footer from './Component/Footer.js';
import Home from './Component/Home.js';
import Contact from './Component/Contact.js';
import About from './Component/About.js';
import UserProfile from './Component/Profile.js';
import LandlordHome from './Component/LandlordHome.js';
import TenantHome from './Component/TenantHome.js';
import { UserProvider } from './Component/UserContext.js';
import Payment from './Component/Payment.js';
import Myrooms from './Component/RoomCard.js';
import Viewbooking from './Component/ViewBooking.js';
import Headerr from './LoginHeader.js';
import Registration from './Component/Registration.js';
import Welcome from './Component/Welcome.js';
import Login from './Component/Login.js';
import SearchBar from './Component/SearchBar.js';
import OurServices from './Component/Ourservice.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  // On initial load, check if the user is logged in and their role
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const userRole = localStorage.getItem("role");

    if (loggedIn) {
      setIsLoggedIn(true);
      setRole(userRole);
    }
  }, []);

  const handleLogin = (selectedRole) => {
    setIsLoggedIn(true);
    setRole(selectedRole);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("role", selectedRole);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <UserProvider>
      <div className="App">
        {!isLoggedIn ? (
          <>
            <Headerr />
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signIn' element={<Home onLogin={handleLogin} />} />
              <Route path='/register' element={<Registration />} />
              <Route path='/ourservice' element={<OurServices />} />
              <Route path='/login' element={<Login onLogin={handleLogin} />} />
            </Routes>
          </>
        ) : (
          <>
            {role === 'tenant' ? (
              <>
                <TenentHeader onLogout={handleLogout} />
              </>
            ) : role === 'landlord' ? (
              <LandlordHeader onLogout={handleLogout} />
            ) : (
              <TenentHeader onLogout={handleLogout} /> // Fallback header
            )}
            <Routes>
              <Route path='/' element={role === 'landlord' ? <LandlordHome /> : <TenantHome />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/myrooms' element={role === 'tenant' ? <Viewbooking /> : <Myrooms />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </UserProvider>
  );
}

export default App;
