import { Link } from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
    * {
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif !important;
    }
    body {
      margin: 0;
    }
    
.MuiButton-contained {
  color: #fff !important;
  background: #121212 !important;
  border-radius: 6px;
  //width: 100% !important;
}


    
`

export const theme = {
  pallete : {
      black : "#000",
      white: "#fff"

  }
}

export const FlexBox = styled.div`  
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.items};
  width: ${props => props.width};
`

export const FlexColum = styled(FlexBox)`  
  flex-direction: column;
justify-content: ${props => props.justify};
align-items: ${props => props.items};
margin: ${props => props.margin};

`

export const Typography = styled.p`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin-top : ${props =>props.marginTop};
  margin-bottom : ${props =>props.marginBottom};

`

export const Container = styled.div`
width: 85%;
margin: 0 auto;
`

export const StyledImage = styled.img`
max-width: 100%;
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
border-radius: ${props => props.BorderRadius}%;
/* object-fit: ${props => props.ObjectFit}; */
    object-fit: cover;


   @media (max-width: 768px) {
    width: 100%;
  }

`

export const StyledDel = styled("del")`
color: #A7A7A7;
margin: 0 5px;

`
export const Cards = styled.div`
  width: 100%;
  margin-top: 20px;
`


export const NavLink = styled(Link)`
  text-decoration: none;
  color: #121212;
  font-weight: 500;
  font-size: 16px;
`

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartAndCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-right: 20px;
`

export const LinkCategores = styled(Link)`
  border-bottom: ${props => props.borderBottom};
  padding-bottom: ${props => props.paddingBottom}px;
  text-decoration: none;
  color: black;
`

export const DivContiner = styled.div`
  background-color: #FAFAFB;
  padding: 50px 0;

`



export const StyleSelect = styled.select`
    border: none;
    margin-left: 20px;
`

export const StyleDiv = styled.div`
 
  width:100%;
  max-width: 350px;
`

export const StyledIcon = styled.div`
  font-size: 20px;
  color: #121212;
  margin-right: 10px;
  margin-top: 20px;
  background-color: white;
  display: inline-block;
  border-radius: 50%;
  width: 10%;
  height: 5%;
  padding-top: 5px;
  text-align: center;
`