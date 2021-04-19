import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {


  return (
    <>
      <div>POKEDEX DAS MINAS</div>
      <Link to="/pokedex"><button>Ir Para Pokedex</button></Link>
    </>
  )

};

export default HomePage;
