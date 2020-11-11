import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import BlogCards from '../BlogCards';
import DestinationCards from '../DestinationCards';
import Footer from '../Footer'

function Home () {
    return (
        <>
            <Hero />
            <BlogCards />
            <DestinationCards />
            <Footer />
        </>
    )
}

export default Home;