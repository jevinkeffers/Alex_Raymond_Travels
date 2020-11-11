import React from 'react';
import CardItem from './CardItem';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Cards.css';
import './Button.css';

function DestinationCards() {
    return (
        <div className='cards'>
            <h1>Check Out These Destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/destinations'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Travel through the Islands of Bali in a Private Cruise'
                                label='Luxury'
                                path='/destinations'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                                label='Luxury'
                                path='/destinations'
                            />
                        </ul>
                    </div>
                    <Button>
                        <Link to="/blog"> 
                            Choose your adventure!
                        </Link>
                    </Button>
                </div>
        </div>
    );
}

export default DestinationCards;