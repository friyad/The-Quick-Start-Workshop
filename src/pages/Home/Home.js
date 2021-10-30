import React from 'react';
import CarParts from './CarParts/CarParts';
import HomeSlider from './HomeSlider/HomeSlider';
import OurExperts from './OurExperts/OurExperts';

const Home = () => {
    return (
        <div id="home">
            <HomeSlider />
            <CarParts />
            <OurExperts />
        </div>
    );
};

export default Home;