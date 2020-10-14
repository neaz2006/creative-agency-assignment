
import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import Social from './Social/Social';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import ShowCard from '../ShowCard/ShowCard';
import ClientCard from '../ClientCard/ClientCard';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>       
            <Header></Header>
            <Social></Social>
            <ShowCard></ShowCard>
            <CarouselSlide></CarouselSlide>
            <ClientCard></ClientCard>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;