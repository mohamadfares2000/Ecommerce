import styled from "styled-components";
import {FlexBox} from "../../App.Styled";

export const CategoriesHeader = styled(FlexBox)`
    justify-content: space-between;
    align-items: center;
`

export const StyledCardWrapper = styled(FlexBox)`
    justify-content: space-between;
  text-align: center;
  margin-top: 104px;

    @media (max-width: 768px) {
    flex-direction: column;
  }


`

export const StyledCard = styled.div`
    width: 49%;
        @media (max-width: 768px) {
          width: 100%;
          margin-bottom: 3%;
  }
`

export const StyledShopContent = styled.div`
    width: 43%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

          @media (max-width: 768px) {
          width: 100%;
  }

`

export const StyledShopImages = styled.div`
  width: 49%;
  display: flex;
  
  &img{
    margin: 10px;
  }

      @media (max-width: 768px) {
  width: 100%;
        margin-bottom: 15%;
        flex-direction: row;
         
  }

`

export const MoreAdditions = styled.div`
  width: 6px;
  height: 6px;
  font-weight: 700;
  font-size: 25px;
  margin-left: 5px;
`

export const StyledShopbrands = styled.div`
  background-color:#FAFAFB;
  padding:20px 0px 30px 50px;
  margin-top:40px;
  margin-bottom:7%;
`

export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;

   @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 65%;
  }

`

export const HeroContentWrapper = styled.div`
  background-color:${props => props.BackgroundColor};
  width:${props => props.width};

   @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }

`
export const HeroContent = styled.div`
  width:70%;
  margin-left: ${props =>props.MarginLeft};
  margin-top: 25%;
`

export const HeroTitle = styled.h1`
color: var(--black-900, #121212);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 54px;
font-style: normal;
font-weight: 500;
line-height: 58px; /* 107.407% */
letter-spacing: -1px;
`

export const HeroDesription = styled.p`
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    width: 80%;
`

export const HeroButton = styled.button`
  display: flex;
  padding: 12px 26px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 39px;
  font-weight: 500;
  background:#121212;
  color: white;
  outline: none;
  border: none;
`


export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 52px;
  height: 334px;
  background-color: #fafafb;
  margin-top: 5%;
  margin-bottom: 2%;
`;

export const NewsletterHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Newsletter = styled.span`
  color: #121212;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;

export const NewsletterSubTitle = styled.p`
  color: #121212;
  text-align: center;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
`;

export const NewsletterInputWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 488px;
  border-radius: 6px;
  border: 1px solid #cbcbcb;
  background: #fff;
  padding: 14px 16px;

  & > svg {
    width: 24px;
    height: 24px;
    color: #121212;
  }
`;

export const NewsletterInput = styled.input`
  border: 0;
  outline: none;
  flex: 1;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #121212;
`;

export const NewsletterBtn = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
`;

export const FooterWrapper = styled.div`
  background-color: #fafafb;
  padding: 72px 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterWrapperLeft = styled.div`
  flex: 1;
  max-width: 424px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterLeftTitle = styled.h3`
  color: #121212;
  font-size: 34px;
  font-weight: 500;
`;

export const FooterLeftDescription = styled.p`
  color: #605f5f;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

export const FooterLeftSocialWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 9px;
  border-radius: 50%;
  
  background-color: #fff;
  color: #121212;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #222;
    color: #fff;
  }
  
  & > a {
    text-decoration: none;
    color: #121212;
  }
`;

export const FooterWrapperRight = styled.div`
  display: flex;
  gap: 120px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLinksTitle = styled.span`
  color: #121212;
  font-size: 14px;
  font-weight: 500;
`;

export const FooterLink = styled.span`
  & > a {
    color: #000000;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }
`;

export const ShopbrandsWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;

        @media (max-width: 768px) {
         flex-direction: column;
        }
  
`