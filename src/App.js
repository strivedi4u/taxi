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
const App = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes >
          {/* <Route exact path="/" element={<Map />} /> */}
          <Route exact path="/taxi" element={<Home />} />
          <Route exact path="/api" element={<TaxiRentalSystem />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/request" element={<Request />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;