import React from 'react';
import {format} from 'date-fns';
const Header = () => {
    return (
        <div className='  mt-5'> 
            <div className='flex justify-center'><img src="/src/assets/logo.png" alt="" /></div>
            <p className='text-center text-2xl mt-5  text-accent'> Journalism without fear or favour</p>
            <p className='text-center text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;