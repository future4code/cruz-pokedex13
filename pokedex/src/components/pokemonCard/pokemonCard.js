import React from "react";
import { CardContainer, ContainerButton, ImgPokemon } from "./styled";
import { ButtonAdd, ButtonDetails } from "../../constants/buttons";
import { Link } from 'react-router-dom'

const PokemonCard = (props) => {


  return (
    <CardContainer>
      <p>{props.pokemon.name}</p>
      <ImgPokemon src={props.pokemon && props.pokemon.sprites.front_default} alt={props.pokemon.name}/>


      <ContainerButton>
        <ButtonAdd >'Remover/Adiciona'</ButtonAdd>
        <ButtonDetails><Link to='/details'>Ver detalhes</Link></ButtonDetails>
      </ContainerButton>
    </CardContainer >
  );
};
export default PokemonCard;
