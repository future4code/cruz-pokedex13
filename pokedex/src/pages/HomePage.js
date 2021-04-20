
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useContext, useState } from 'react';
import PokemonCard from '../components/pokemonCard/pokemonCard'
import styled from 'styled-components'
import GlobalStateContext from '../GlobalState/GlobalContaxt';


const HomePage = () => {
  
  const [show, setShow] = useState(true);
  const {pokemons} = useContext(GlobalStateContext);

  const estadoshow = () => {
    show ? setShow(false) : setShow(true)
  }

  const screen = (
    show ? <PokeListContainer>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
      })}
    </PokeListContainer> : <div>Carregando ... </div>
  )

  return (
    <>

      <Header />
      <button onClick={() => estadoshow()}>ENTRA/SAI</button>
      {screen}

      <Footer />

    </>
  )

};

export default HomePage;



export const PokeListContainer = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
  justify-content:center;
  justify-items:center;
  padding-top:1%;
  grid-column-gap:2vw;
  grid-row-gap:7vh;
  overflow:auto;
  height:95vh;

`
