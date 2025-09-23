import React, { use, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = ({news}) => {
   const allDetails = news.map(item => item.details).join(" ");
    // console.log( allDetails);
    return (
        <div className='flex gap-5 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-3 rounded-2xl '>Latest</p>
            <Marquee  pauseOnHover ={true} className=''>
            <p className='font-bold mt-4'>{allDetails}</p>
            </Marquee>
        </div>
    );
};

export default LatesNews;