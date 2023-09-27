import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
    * {
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif;
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
`
export const StyledDel = styled("del")`
color: #A7A7A7;
margin: 0 5px;

`
export const Cards = styled.div`
  width: 100%;
  margin-top: 20px;
`