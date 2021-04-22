import React from "react";
import styled from 'styled-components'
import Logo from '../img/logo.png'
import { useHistory, Link } from "react-router-dom";
import { goToPokedexPage } from "../routes/coordinator"


const HeaderStyled = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#ee5253;
    width:98.5vw;
    height:12vh;
    margin-top:0px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom:4vh;
`
const LogoStyled = styled.img` 
    width:clamp(120px,12vw,400px);
    height:9vh;
    margin-top:10px;
    margin-left:64px;
`
const DivButton = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:16px;
    margin-right:70px;
    width:20vw;
    height:7vh;
`
const ButtonHome = styled.button`
    background-color:transparent;
    color:white;
    font-weight:500;
    font-size:1.12rem;
    outline:none;
    border:none;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    &:active{
        color:#322d99;
    }
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
const PokeballIcon = styled.div`
    position: absolute;
    width: 2em;
    height: 2em;
    background-color: transparent;
    border: .2em solid #333;
    border-radius: 50%;
    transition: .5s ease transform;
    &:hover {
        transform: rotate(360deg);
    }
    &:before,
    &:after {
        content: "";
        alt: attr(data-alt);
        position: absolute;
    }
    &:before {
        top: calc(50% - 0.1em);
        width: 100%;
        height: 0.2em;
        background-color: #333;
    }
    &:after {
        width: .8em;
        height: .8em;
        top: calc(50% - .4em);
        left: calc(50% - .4em);
        
        border-radius: 50%;
        border: .2em solid #333;
        color: #fff;
        background-color: #fff;
    }
`
const ButtonPokeball = styled.div`
    display:flex;

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
                <ButtonPokedex onClick={() => goToPokedexPage(history)}>Minha Pokédex
                    {/* <ButtonPokeball> */}
                    {/* </ButtonPokeball> */}
                </ButtonPokedex>
            </DivButton>
        </HeaderStyled>
    )
}

export default Header;
