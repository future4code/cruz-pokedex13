import React from "react";
import { CardContainer, ContainerButton, ImgPokemon } from "./styled";
import { ButtonAdd, ButtonDetails } from "../../constants/buttons";

const PokemonCard = () => {
  return (
    <CardContainer>
      <p>"Pokemon.nome"</p>
      <ImgPokemon
        src='https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pikachu-Bon%C3%A9-Pok%C3%A9mon-PNG-980x1024.png'
        alt='pokemon.name'
      />

      <ContainerButton>
        <ButtonAdd>'Remover/Adiciona'</ButtonAdd>
        <ButtonDetails>Ver detalhes</ButtonDetails>
      </ContainerButton>
    </CardContainer>
  );
};
export default PokemonCard;
