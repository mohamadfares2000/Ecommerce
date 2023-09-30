import React, { useState } from 'react';
import Categories from "./Categories";
import Shopbrands from "./Shopbrands";
import ProductCarousel from './ProductCarousel';
import Instagram from './Instagram';
import Offer from '../../components/offer section/Offer';
import NavBar from '../../components/navBar/NavBar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import { Newsletters } from './NewLetters';
import Footer from '../../components/Footer/Footer';



function HomePage(props) {
    const [show, setShow] = useState(true)
    return (
        <>
            {show && <Offer handelShow={() => setShow((prev) => !prev)}/>}
            <NavBar/>
            <HeroSection/>
            <Categories/>
            <ProductCarousel/>
            <Shopbrands/>
            <FeatureSection/>
            <Newsletters/>
            <Instagram/>
            <Footer/>
        </>
    );
}

export default HomePage;