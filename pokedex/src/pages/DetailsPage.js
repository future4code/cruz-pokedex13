
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from "styled-components"

const MainContainer = styled.div`
height:80vh;
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
`

const ContainerLeft = styled.div`
height:80%;
width:50%;
`
const ContainerRight = styled.div`
height:80%;
width: 50%;
`
const Title = styled.h1`
margin-bottom:3%;
text-align:center;
font-family: poppins;
color:darkgray;
:hover{
  text-decoration:underline #FEB437;
}
`
const FrontBox = styled.div`
background-color: #edb4b4;
margin-left: auto;
margin-right: auto;
margin-bottom: 3%;
height:40%;
width:30%;
-webkit-box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
-moz-box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
`
const FrontImg = styled.img`

`
const BackImg = styled.img`

`
const BackBox = styled.div`
background-color: #edb4b4;
margin-left: auto;
margin-right: auto;
height:40%;
width:30%;
-webkit-box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
-moz-box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
`
const Description = styled.div`
background-color: #edb4b4;
height: 85%;
width:70%;
margin-top: 10%;
-webkit-box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
-moz-box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
box-shadow: -1px 2px 16px 0px rgba(0,0,0,0.34);
`

const DetailsPage = () => {


  return (
    <>
      <Header />
      <MainContainer>
        <ContainerLeft><Title>Nome</Title><FrontBox><FrontImg></FrontImg></FrontBox><BackBox><BackImg></BackImg></BackBox></ContainerLeft>
        <ContainerRight><Description></Description></ContainerRight>
      </MainContainer>
      <Footer />
    </>
  )
};

export default DetailsPage;
