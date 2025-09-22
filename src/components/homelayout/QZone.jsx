import React from 'react';

const QZone = () => {
    return (
        <div className='bg-base-200 p-2 mt-5'>
            <h2 className='font-bold text-center text-accent '>QZone</h2>
            <div className=' flex flex-col space-y-5 '>
                <img src="/src/assets/swimming.png" alt="" />
                <img src="/src/assets/class.png" alt="" />
                <img src="/src/assets/playground.png" alt="" />
            </div>
        </div>
    );
};

export default QZone;