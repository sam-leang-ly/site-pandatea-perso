import React from 'react';

import { GlobalStyle } from '../../GlobalStyle';
import Hero from '../Hero';
import Footer from '../Footer'
import Feature from '../Feature';
import Feature2 from '../Feature2';
import CarouselI from '../Carousel';



function PageIndex() {
    return (
        <div>
            <GlobalStyle />
            <Hero />
            <Feature />
            <Feature2 />
            <CarouselI />
        <Footer />
        </div>
    )
}
    export default PageIndex;