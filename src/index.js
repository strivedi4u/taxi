// index.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Preloader from './components/Preloader'; // Import the Preloader component

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate a backend load
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after data is fetched
    }, 1000); // Simulate a 3-second loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <App />} {/* Show preloader or main app */}
    </>
  );
};

// Render the Index component to the root
root.render(
  <React.StrictMode>
    <Index /> {/* Use the Index component which handles loading */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
