import React from 'react';
import BannerSection from './BannerSection';
import Chef from './Chef/Chef';
import DetailsSection from './DetailsSection/DetailsSection';
import ReviewSection from './ReviewSection/ReviewSection';
import PopularRecipe from './PopularRecipe/PopularRecipe';

const Home = () => {
    return (
        <div className='mt-7 rounded-md mx-auto max-w-7xl'>
            <BannerSection></BannerSection>
            <Chef></Chef>
            <PopularRecipe></PopularRecipe>
            <DetailsSection></DetailsSection>
            <ReviewSection/>
        </div>
    );
};

export default Home;