import './App.css';

import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import React, { useState } from 'react';
import Home from './Component/Home.js';
import Contact from './Component/Contact.js';
import About from './Component/About.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './Component/Profile.js';
import LandlordHome from './Component/LandlordHome.js';
import TenantHome from './Component/TenantHome.js';
//import ViewBooking from './Component/ViewBooking'; // Import ViewBooking
import { UserProvider } from './Component/UserContext.js';
import Payment from './Component/Payment.js';
import Myexercise from './Component/ViewBooking.js';
import Headerr from './LoginHeader.js';
import Registration from './Component/Registration.js';
import Welcome from './Component/Welcome.js';
import Login from './Component/Login.js';

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
          <>
            <Headerr />
            <Routes>
              <Route path='/' element={< Welcome />}></Route>
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signIn' element={<Home onLogin={handleLogin} />} />
            </Routes>
          </>

        ) : (
          <>
            <Header onLogout={handleLogout} role={role} />
            <Routes>
              <Route path='/' element={role === 'landlord' ? <LandlordHome /> : <TenantHome />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/payment' element={<Payment />} />

              <Route path='/viewbooking' element={<Myexercise></Myexercise>} />
            </Routes>
            {/* <ViewBooking></ViewBooking> */}

            <Footer />
          </>
        )}
      </div>
    </UserProvider>
  );
}

export default App;
