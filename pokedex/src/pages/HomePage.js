import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useContext, useState } from "react";
import PokemonCard from "../components/pokemonCard/pokemonCard";
import styled from "styled-components";
import GlobalStateContext from "../GlobalState/GlobalContext";
import { useHistory } from "react-router-dom";
import Pagination from "../routes/pagination";
import loading from "../img/Pokebolas-17369.gif";

const HomePage = () => {
  const { pokemons, pokemonNames } = useContext(GlobalStateContext);
  const history = useHistory();

  const screen = (
    <PokeListContainer> 
      {pokemonNames ? (    
      pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      }) ) : <img src={loading} /> }


    </PokeListContainer>
  );
  return (
    <>
      <Header />
      <Pagination />
      {screen}
      <Footer />
    </>
  );
};

export default HomePage;

export const PokeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  padding-top: 1%;
  grid-column-gap: 2vw;
  grid-row-gap: 7vh;
  overflow: auto;
  height: 100vh;
`;
