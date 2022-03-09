import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import React from "react";

const App : React.FC = () => {
  return (
    <>
      <Header/>
      <Navigation/>
      <Footer/>
    </>
  );
}

export default App;
