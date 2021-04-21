import React, { useContext } from "react";
import { CardContainer, ContainerButton, ImgPokemon } from "./styled";
import { ButtonAdd, ButtonDetails } from "../../constants/buttons";
import { useHistory } from 'react-router-dom'
import GlobalStateContext from "../../GlobalState/GlobalContext";
import { goToDetailsPage } from "../../routes/coordinator"

const PokemonCard = ({ pokemon, GoPokedex }) => {
  const history = useHistory();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)

  const addToPokedex = () => {
    const pokeNew = pokemons.findIndex((item) => item.name === pokemon.name)
    const newPokeList = [...pokemons]
    newPokeList.splice(pokeNew, 1)
    const orderedPokemons = newPokeList.sort((a, b) => {
      return a.id - b.id
    })


    const newPokedexList = [...pokedex, pokemon]
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })
    setPokedex(orderedPokedex)
    setPokemons(orderedPokemons)
  }

  const removePokedex = () => {

    const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
    const newPokedexList = [...pokedex]
    newPokedexList.splice(pokeIndex, 1)

    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })

    const newPokemonsList = [...pokemons, pokemon]
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(orderedPokedex)
    setPokemons(orderedPokemons)

  }


  return (
    <CardContainer>
      <p>{pokemon.name}</p>
      <ImgPokemon src={pokemon && pokemon.sprites.front_default} alt={pokemon.name}/>
      <ContainerButton>
        <ButtonAdd onClick={GoPokedex ? removePokedex : addToPokedex}>{GoPokedex ? 'Remove from Pokédex' : 'Add to Pokédex'}</ButtonAdd>
        <ButtonDetails onClick={() => goToDetailsPage(history, pokemon.name, GoPokedex)}>Details</ButtonDetails>
      </ContainerButton>
    </CardContainer >
  );
};
export default PokemonCard;

// deveria passar o pokemon.name aqui e na pokedex
// goToPokemonDetail(history, props.poke.name, props.isPokedex)