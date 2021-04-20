
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from 'react';
import PokemonCard from '../components/pokemonCard/pokemonCard'
import styled from 'styled-components'


const HomePage = () => {
  const [pokeList] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  const[show, setShow] = useState(true);


const estadoshow = () => {
  show ? setShow(false) : setShow(true)
}

  const screen = (
     show ? <PokeListContainer>
             {pokeList.map((poke) => {
                return <PokemonCard  /> 
             })}
      </PokeListContainer> : <div>Carregando ... </div>
  )

  return (
    <>

<Header/>
<button onClick={()=>estadoshow()}>ENTRA/SAI</button>
      {screen}

<Footer/>
      
     
      

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
