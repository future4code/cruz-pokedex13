import React, { useState } from "react";
import styled from 'styled-components'

const FooterStyled = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:10vh;
    background-color:#1f1f1f;
    
`
const FooterStyledROSA = styled.div `
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:100vw;
    height:10vh;
    background-color:pink;
    
`

const TextFooter = styled.div `
    color:#525252;
    font-size:1rem;
`

const Footer = (props) => {


  

    return(
 <>
    {props.show ? <FooterStyledROSA >
         {props.show ? <p> TO NO SHOW </p> : <p>NADA</p> }
        <TextFooter>@2021 Todos os direitos reservados</TextFooter>
    </FooterStyledROSA> : <FooterStyled >
         {props.show ? <p> TO NO SHOW </p> : <p>NADA</p> }
        <TextFooter>@2021 Todos os direitos reservados</TextFooter>
    </FooterStyled>
    }

        

    
 </>
) 
}

export default Footer;