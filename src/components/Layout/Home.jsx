import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import LatesNews from '../LatesNews';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div>
            <header><Header></Header>
                <section className='w-11/12 mx-auto mt-5'><LatesNews></LatesNews></section>
                <nav className='w-11/12 mx-auto mt-5'><Navbar></Navbar></nav>
                </header>
            <main>
                 <section className='right-nav'></section>
                 <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Home;