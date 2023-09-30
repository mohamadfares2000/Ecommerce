import React from 'react';
import {Container, FlexBox, StyledImage, Typography} from "../../App.Styled";
import {ShopbrandsWrapper, StyledShopContent, StyledShopImages, StyledShopbrands} from "./Home.Styles";
import {FaArrowRight} from "react-icons/fa";
import brandImg1 from "../../assets/images/Logos.png"
import brandImg2 from "../../assets/images/Logos.svg"


function Shopbrands(props) {
    return (
        <Container>
                <StyledShopbrands>
                         <FlexBox justify={"space-between"} items={"center"} >
                    <ShopbrandsWrapper>
                            <StyledShopContent>
                                <Typography fontSize={40} fontWeight={500}>Shop brands</Typography>
                                <Typography fontSize={18} color={'#3E3E59'}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu.</Typography>
                                <Typography fontSize={18}>See all brands <FaArrowRight fontSize={18} /></Typography>
                            </StyledShopContent>
                            <StyledShopImages>
                                <div>
                                    <StyledImage  src={brandImg1} />
                                    <StyledImage  src={brandImg2} />
                                </div>

                                <div>
                                    <StyledImage  src={brandImg1} />
                                    <StyledImage  src={brandImg2} />
                                </div>
                                <div>
                                    <StyledImage  src={brandImg1} />
                                    <StyledImage  src={brandImg2} />
                                </div>
                            </StyledShopImages>
                </ShopbrandsWrapper>  
                        </FlexBox>

                </StyledShopbrands>
        </Container>
    );
}

export default Shopbrands;