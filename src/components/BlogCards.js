import React from 'react';
import CardItem from './CardItem';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Cards.css';
import './Button.css';

function BlogCards() {
    return (
        <div className='cards'>
            <h1>Learn From Alex's Experience</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum lorem ipsum'
                            label='Lorem ipsum'
                            path='/blog'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum'
                            label='Lorem ipsum'
                            path='/blog'
                        />
                    </ul>
                </div>
                <Button>
                    <Link to="/blog"> 
                        Read more
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default BlogCards;