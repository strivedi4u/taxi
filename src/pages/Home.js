import React from "react";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
const Home = () => {

  return (
    <>
      <Navbar home={"book"} />
      <MainContent />
    </>
  );
};


export default Home;
