import styled from 'styled-components'
import {themeCard, themeCardBorder} from '../../constants/colors'


export const CardContainer = styled.div`
  display:grid;
  grid-template-rows: 1fr 7fr 2fr;
  justify-items:center;
  background-color: ${themeCard};
  border: 1px solid ${themeCardBorder};
  border-radius: 10px;
  width: 278px ;
  height:350px ;
  text-align: center;
  text-transform: uppercase; 
  color: rgb(77, 75, 73);
  box-shadow: 6px 4px 10px ${themeCardBorder};
  &:hover{
  transform: scale(1.05);

  
  }
`

export const ImgPokemon = styled.img`
   width: 70%;

`
export const ContainerButton= styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  height:70%;
  gap:5%;


  
 

`