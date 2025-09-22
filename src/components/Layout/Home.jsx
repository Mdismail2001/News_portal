import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import LatesNews from '../LatesNews';
import Navbar from '../Navbar';
import LeftAside from '../homelayout/LeftAside';
import RightAside from '../homelayout/RightAside';

const Home = () => {
    return (
        <div>
            <header><Header></Header>
                <section className='w-11/12 mx-auto mt-5'><LatesNews></LatesNews></section>
                <nav className='w-11/12 mx-auto mt-5'><Navbar></Navbar></nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                 <section className='col-span-6'>
                    <Outlet></Outlet>
                 </section>
                 <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;