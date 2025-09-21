import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import LatesNews from '../LatesNews';

const Home = () => {
    return (
        <div>
            <header><Header></Header></header>
            <main>
                <section className='w-11/12 mx-auto mt-5'><LatesNews></LatesNews></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default Home;