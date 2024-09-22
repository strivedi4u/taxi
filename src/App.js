import React from 'react';
import './assets/css/style.css';
import './assets/css/animated.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import TaxiRentalSystem from './pages/ApiTest';
import PendingRequest from './pages/PendingRequests';
import Map from './components/Map';
import Form from './components/Form';
import Request from './components/Request';
import View from './pages/View';
import Profile from './pages/Profile';
import GBooking from './pages/GBooking';
import MBooking from './pages/MBooking';
import VRequest from './pages/VRequest';
const App = () => {
  return (
    <>
    {/* <Navbar /> */}
      <BrowserRouter>
        <Routes >
          {/* <Route exact path="/" element={<Map />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gbook" element={<GBooking />} />
          <Route exact path="/mbook" element={<MBooking />} />
          <Route exact path="/vrequest" element={<VRequest />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/api" element={<TaxiRentalSystem />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;