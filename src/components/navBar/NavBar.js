import React from 'react'
import { Burger, NavBarContainer, NavBarPages, NavCounter, NavIcons, SearchIcon } from './NavBar.styled'
import logo from '../../assets/images/Branding.svg'
import BurgerIcon from '../../assets/images/Hamburger.svg'
import { CartAndCount, FlexBox, LogoLink, NavLink, Typography } from '../../App.Styled'

import { AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';



export default function NavBar() {
  return (
    <>
      <NavBarContainer>
        <LogoLink to="/">
              <img src={logo}/>
        </LogoLink>

        <NavBarPages>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Product</NavLink>
            <NavLink to="/">Category</NavLink>
        </NavBarPages>
        <NavIcons>

          <SearchIcon>
          <FlexBox>
                <AiOutlineSearch fontSize={'30px'}/>
                <FiUser fontSize={'30px'}/>
              </FlexBox>
          </SearchIcon>

            <CartAndCount>
                  <BiShoppingBag fontSize={'30px'}/>
                  <NavCounter>2</NavCounter>
            </CartAndCount>
            <Burger src={BurgerIcon}></Burger>

        </NavIcons>

      </NavBarContainer>
    </>
  )
}
