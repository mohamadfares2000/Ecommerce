import React, { useEffect, useState } from 'react';
import {Container, LinkCategores, StyledImage, Typography} from "../../App.Styled";
import {CategoriesHeader, StyledCard, StyledCardWrapper} from "./Home.Styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import itemImg from "../../assets/images/item.png"
import splashImg from "../../assets/images/splash.png"
import splashImg22 from "../../assets/images/splashImg22.svg"


// Import Swiper styles
import 'swiper/css';

function Categories(props) {

    const [slidesPerView, setSlidesPerView] = useState(5); 

    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setSlidesPerView(2); 
        } else {
          setSlidesPerView(5); 
        }
      };
    
      handleResize();
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    return (
        <Container>
            <CategoriesHeader>
                <Typography fontSize="34">Categories</Typography>
                <LinkCategores paddingBottom={5} borderBottom={'2px solid black'}>See all Categories</LinkCategores>
            </CategoriesHeader>
            
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50}/>
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>

                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50}/>
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50}/>
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50}/>
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50}/>
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"200px"} BorderRadius={50}/>
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>

            </Swiper>


            <StyledCardWrapper>
                <StyledCard>
                    <StyledImage src={splashImg} alt="item image" />
                    <Typography fontSize={34} fontWeight={500}>
                        Splash
                    </Typography>
                    <LinkCategores paddingBottom={5} borderBottom={'2px solid black'}>
                        See Collection
                    </LinkCategores>

                </StyledCard>
                <StyledCard>
                    <StyledImage src={splashImg22} alt="item image" />
                    <Typography fontSize={34} fontWeight={500}>
                        Splash
                    </Typography>
                    <LinkCategores paddingBottom={5} borderBottom={'2px solid black'}>
                        See Collection
                    </LinkCategores>

                </StyledCard>
            </StyledCardWrapper>




        </Container>
    );
}

export default Categories;