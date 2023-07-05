import React from 'react';
import error from "../assets/404 error!!.jpg"

const UnknownPage = () => {
    return (
        <div>
            <img className='mx-auto' src={error} alt="" />
        </div>
    );
};

export default UnknownPage;