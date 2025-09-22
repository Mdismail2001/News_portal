import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-3 rounded-2xl '>Latest</p>
            <Marquee className=' gap-5 ' pauseOnHover ={true}>
            <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus molestias dolore quis qui recusandae dolores harum corporis tempora facilis?</p>
            </Marquee>
        </div>
    );
};

export default LatesNews;