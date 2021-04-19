import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
      <Header/>
      <div>POKEDEX DAS MINAS</div>
      <Link to="/pokedex"><button>Ir Para Pokedex</button></Link>
      <Footer/>
    </>
  )

};

export default HomePage;
