import styled from 'styled-components'
import { themePrimary, themePrimaryHover} from './colors'


export const ButtonAdd = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width:clamp( 50px , 100% , 150px);
  color: white;
  background-color: ${themePrimary};
  :hover{
    filter: brightness( 80% );
  }
`

export const ButtonDetails = styled.button` 
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width:clamp( 50px , 100% , 150px);
  color: ${themePrimary};
  background-color: ${themePrimaryHover};
  :hover{
    filter: brightness( 80% );
  }
`
