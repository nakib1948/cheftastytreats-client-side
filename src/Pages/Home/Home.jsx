import React from 'react';
import BannerSection from './BannerSection';
import Chef from './Chef/Chef';
import DetailsSection from './DetailsSection/DetailsSection';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div className='mt-7 rounded-md'>
            <BannerSection></BannerSection>
            <Chef></Chef>
            <DetailsSection></DetailsSection>
            <ReviewSection/>
        </div>
    );
};

export default Home;