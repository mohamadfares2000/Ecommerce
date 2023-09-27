import React from 'react'
import { NavBarContainer, NavBarPages, NavCounter, NavIcons } from './NavBar.styled'
import logo from '../../assets/Branding.svg'
import { Typography } from '../../App.Styled'

import { AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';



export default function NavBar() {
  return (
    <>
      <NavBarContainer>
        <img src={logo}></img>

        <NavBarPages>
            <Typography color='#121212' font-weight='500'font-size='14px' cursor='pointer'>Home</Typography>
            <Typography color='#121212' font-weight='500'font-size='14px' cursor='pointer'>Product</Typography>
            <Typography color='#121212' font-weight='500'font-size='14px' cursor='pointer'>Category</Typography>
        </NavBarPages>
        <NavIcons>
            <AiOutlineSearch fontSize={'30px'}/>
            <FiUser fontSize={'30px'}/>
            <BiShoppingBag fontSize={'30px'}/>
            <NavCounter>2</NavCounter>
        </NavIcons>

      </NavBarContainer>
    </>
  )
}
