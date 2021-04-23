import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStateContext from "../GlobalState/GlobalContext";
import { PokeListContainer } from "./HomePage";
import PokemonCard from "../components/pokemonCard/pokemonCard";
import { goToDetailsPage } from "../routes/coordinator"
import loading from "../img/Pokebolas-17369.gif"

const PokedexPage = () => {
  const { pokedex } = useContext(GlobalStateContext);
  const history = useHistory();

  return (
    <>
      <Header />
      <PokeListContainer>
        {pokedex.length != 0 ? pokedex.map((poke) => {
          return <PokemonCard key={poke.name} GoPokedex pokemon={poke} />
        }) : (<img src={loading} alt="loading Pokedex"/>)}
      </PokeListContainer>
      <Footer />
    </>
  )
};

export default PokedexPage;

//history, poke.name