import React, { useState } from 'react';
import Categories from "./Categories";
import Shopbrands from "./Shopbrands";
import ProductCarousel from './ProductCarousel';
import Instagram from './Instagram';
import Offer from '../../components/offer section/Offer';
import NavBar from '../../components/navBar/NavBar';


function HomePage(props) {
    const [show, setShow] = useState(true)
    return (
        <>
            {show && <Offer handelShow={() => setShow((prev) => !prev)}/>}
            <NavBar/>
            <Categories/>
            <Shopbrands/>
            <ProductCarousel/>
            <Instagram/>
        </>
    );
}

export default HomePage;