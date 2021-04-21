import React from "react";
import styled from 'styled-components'

const FooterStyled = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    width:98.5vw;
    height:10vh;
    background-color:#1f1f1f;
    margin-top:4vh;
    
`
const TextFooter = styled.div `
    color:#525252;
    font-size:1rem;
`

const Footer = () => {
    return(
    <FooterStyled>
        <TextFooter>@2021 Todos os direitos reservados</TextFooter>
    </FooterStyled>
) 
}

export default Footer;