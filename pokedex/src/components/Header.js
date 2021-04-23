import React from "react";
import styled from 'styled-components'
import Logo from '../img/logo.png'
import { useHistory, Link } from "react-router-dom";
import { goToPokedexPage } from "../routes/coordinator"


const HeaderStyled = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#ee5253;
    width:100%;
    height:12vh;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
`
const LogoStyled = styled.img` 
    width:clamp(120px,12vw,400px);
    height:9vh;
    padding-top:10px;
    padding-left:64px;
`
const DivButton = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:16px;
    margin-right:70px;
    width:20vw;
    height:7vh;
`

const ButtonPokedex = styled.button`
    width:24vw;
    background-color:transparent;
    color:white;
    font-weight:500;
    font-size:1.12rem;
    border:none;
    outline:none;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    &:active{
        color:#322d99;
    }
`
const PokeballBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background-color: transparent;
    cursor: pointer;
    *,
    *:after,
    *:before {
    box-sizing: border-box;
    }
`

// --------------------------------------------------------------------------------------------------------------
const Header = () => {
    const history = useHistory();
    return (
        <HeaderStyled >
            <Link to="/"> <LogoStyled src={Logo} /></Link>
            <DivButton>
                <PokeballBox>
                </PokeballBox>
                <ButtonPokedex onClick={() => goToPokedexPage(history)}>My Pokédex
                </ButtonPokedex>
            </DivButton>
        </HeaderStyled>
    )
}

export default Header;
