import React from 'react'
import { Container, FlexBox, StyledImage, Typography } from '../../App.Styled'
import { CategoriesHeader, MoreAdditions } from './Home.Styles'
import img from "../../assets/Paste image.svg"

import { Swiper } from 'swiper/react';

import { SwiperSlide } from 'swiper/react'

export default function ProductCarousel() {
  return (
    <Container>
     <FlexBox justify={"space-between"} items={"center"}>
        <CategoriesHeader>
            <Typography fontSize="34">Lastest Additions</Typography>
        </CategoriesHeader>

        <div>
        <FlexBox justify={"space-between"} items={"center"}>
          <MoreAdditions>
            .
          </MoreAdditions>
          <MoreAdditions>
            .
          </MoreAdditions>
        </FlexBox>
        </div>
    </FlexBox>

       <Swiper
                spaceBetween={50}
                slidesPerView={4}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <StyledImage src={img} width={"310px"} height={"413px"}/>
                    <Typography fontSize="16"  margin={"0px"} fontWeight={"700"}>
                    Cherry Cherry
                    </Typography>
                    <FlexBox>
                      <Typography fontSize="18" fontWeight={"700"} margin={"10px 15px 0 0"} >
                      $24.99.00
                      </Typography>
                      <Typography fontSize="16" fontWeight={"700"} margin={"10px 0 0 0"} color='#A7A7A7'>
                        <del>
                        $54.00
                       </del>
                      </Typography>
                    </FlexBox>


                </SwiperSlide>

                <SwiperSlide>
                    <StyledImage src={img} width={"310px"} height={"413px"}/>
                    <Typography fontSize="16"  margin={"0px"} fontWeight={"700"}>
                    Cherry Cherry
                    </Typography>
                    <FlexBox>
                      <Typography fontSize="18" fontWeight={"700"} margin={"10px 15px 0 0"} >
                      $24.99.00
                      </Typography>
                      <Typography fontSize="16" fontWeight={"700"} margin={"10px 0 0 0"} color='#A7A7A7'>
                        <del>
                        $54.00
                       </del>
                      </Typography>
                    </FlexBox>


                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={img} width={"310px"} height={"413px"}/>
                    <Typography fontSize="16"  margin={"0px"} fontWeight={"700"}>
                    Cherry Cherry
                    </Typography>
                    <FlexBox>
                      <Typography fontSize="18" fontWeight={"700"} margin={"10px 15px 0 0"} >
                      $24.99.00
                      </Typography>
                      <Typography fontSize="16" fontWeight={"700"} margin={"10px 0 0 0"} color='#A7A7A7'>
                        <del>
                        $54.00
                       </del>
                      </Typography>
                    </FlexBox>


                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={img} width={"310px"} height={"413px"}/>
                    <Typography fontSize="16"  margin={"0px"} fontWeight={"700"}>
                    Cherry Cherry
                    </Typography>
                    <FlexBox>
                      <Typography fontSize="18" fontWeight={"700"} margin={"10px 15px 0 0"} >
                      $24.99.00
                      </Typography>
                      <Typography fontSize="16" fontWeight={"700"} margin={"10px 0 0 0"} color='#A7A7A7'>
                        <del>
                        $54.00
                       </del>
                      </Typography>
                    </FlexBox>


                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={img} width={"310px"} height={"413px"}/>
                    <Typography fontSize="16"  margin={"0px"} fontWeight={"700"}>
                    Cherry Cherry
                    </Typography>
                    <FlexBox>
                      <Typography fontSize="18" fontWeight={"700"} margin={"10px 15px 0 0"} >
                      $24.99.00
                      </Typography>
                      <Typography fontSize="16" fontWeight={"700"} margin={"10px 0 0 0"} color='#A7A7A7'>
                        <del>
                        $54.00
                       </del>
                      </Typography>
                    </FlexBox>
                </SwiperSlide>
            </Swiper>

            

  </Container>

  )
}
