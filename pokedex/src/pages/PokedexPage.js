import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'

const PokedexPage = () => {


  return (
    <>
      <Header/>
      <div>Pokedex</div>
      <Link to="/details"><button>Detalhes</button></Link>
      <Footer/>
    </>
  )
};

export default PokedexPage;
