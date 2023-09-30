import React from 'react'
import { Cards, Container, FlexBox, FlexColum, StyledImage, Typography } from '../../App.Styled'
import insatagram from "../../assets/images/insatagram.svg"


export default function Instagram() {
  return (
    <>
        <FlexColum items={"center"}>
            <Typography fontSize="16" fontWeight={"600"}>#nayzakdesign</Typography>
            <Typography fontSize="40" fontWeight={"500"} margin={"0px 0 0 0"}>On Instagram</Typography>
        </FlexColum>

        <Cards>
          <FlexBox >
              <StyledImage src={insatagram} width={"17%"} height={"300px"} />
              <StyledImage src={insatagram} width={"17%"} height={"300px"} />
              <StyledImage src={insatagram} width={"17%"} height={"300px"} />
              <StyledImage src={insatagram} width={"17%"} height={"300px"} />
              <StyledImage src={insatagram} width={"17%"} height={"300px"} />
              <StyledImage src={insatagram} width={"17%"} height={"300px"} />
          </FlexBox>
        </Cards>



    </>
  )
}
