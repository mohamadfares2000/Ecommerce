import styled from "styled-components";




export const NavBarContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

export const NavBarPages = styled.div`
   width: 25%;
   display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavIcons = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (max-width: 768px) {
    margin-right: 12%;
  }
`

export const NavCounter = styled.p`
   font-size: 16px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 30px;
   height: 30px;
   background-color: black;
   border-radius: 50%;
   font-weight: 700;

`

export const Burger = styled.img`
display: none;

@media (max-width: 768px) {
  display: block;
  margin-right: 20px;
}

`

export const SearchIcon = styled.div`
display: block;

@media (max-width: 768px) {
  display: none;
}

`