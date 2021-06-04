import React from 'react';
import Banner from '../components/Banner/Banner';
import TopCategories from '../components/TopCategories/TopCategories';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <TopCategories />
            <Gallery />
        </>
    );
};

export default Home;