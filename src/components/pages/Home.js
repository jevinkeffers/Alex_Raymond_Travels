import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import BlogCards from '../BlogCards';
import DestinationCards from '../DestinationCards';

function Home () {
    return (
        <>
            <Hero />
            <BlogCards />
            <DestinationCards />
        </>
    )
} 

export default Home;