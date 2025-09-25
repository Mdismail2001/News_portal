import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Header from '../Header';
import LatesNews from '../LatesNews';
import Navbar from '../Navbar';
import LeftAside from '../homelayout/LeftAside';
import RightAside from '../homelayout/RightAside';
import Loading from '../Pages/Loading';

const Home = () => {
   const news = useLoaderData();    
   const {state} = useNavigation();


    return (
        <div>
            <header><Header></Header>
                <section className='w-11/12 mx-auto mt-5'><LatesNews news={news}></LatesNews> </section>
                <nav className='w-11/12 mx-auto mt-5'><Navbar></Navbar></nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                 <section className='col-span-6'>
                   {state =="loading" ? <Loading></Loading> : <Outlet></Outlet>} 
                 </section>
                 <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside ></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;