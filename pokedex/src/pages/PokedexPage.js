import React from "react";
import { Link } from "react-router-dom";

const PokedexPage = () => {


  return (
    <>
      <div>Pokedex</div>
      <Link to="/details"><button>Detalhes</button></Link>
    </>
  )
};

export default PokedexPage;
