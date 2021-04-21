import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStateContext from "../GlobalState/GlobalContaxt";
import { PokeListContainer } from "./HomePage";
import PokemonCard from "../components/pokemonCard/pokemonCard";
// import { PokeListContainer } from "./HomePage";
// import PokemonCard from "../components/pokemonCard/pokemonCard";

const PokedexPage = () => {
  const {pokedex} = useContext(GlobalStateContext);

  return (
    <>
      <Header/>
      <div>Pokedex</div>
      <PokeListContainer>
      {pokedex.map((poke) => {
        return <PokemonCard  key={poke.name} GoPokedex pokemon={poke} />
      })}

     </PokeListContainer> 
  
      <Link to="/details"><button>Detalhes</button></Link>
      <Footer/>
    </>
  )
};

export default PokedexPage;
