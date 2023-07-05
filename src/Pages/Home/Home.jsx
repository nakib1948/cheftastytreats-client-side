import React from 'react';
import BannerSection from './BannerSection';
import Chef from './Chef/Chef';
import DetailsSection from './DetailsSection/DetailsSection';

const Home = () => {
    return (
        <div className='mt-7 rounded-md'>
            <BannerSection></BannerSection>
            <Chef></Chef>
            <DetailsSection></DetailsSection>
        </div>
    );
};

export default Home;